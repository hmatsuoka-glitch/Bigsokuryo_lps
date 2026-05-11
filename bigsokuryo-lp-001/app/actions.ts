"use server";

import nodemailer from "nodemailer";

/**
 * 応募フォームの送信ハンドラ（Next.js Server Action）。
 *
 * 通知は Gmail SMTP 経由で送信します。Vercel の Environment Variables に
 * 以下が設定されている前提です:
 *   - GMAIL_USER         送信元の Gmail アカウント (例: noreply.bigsdc@gmail.com)
 *                        SMTP ログインユーザー兼 From アドレス
 *   - GMAIL_APP_PASSWORD Google アカウントで発行したアプリパスワード
 *                        通常のパスワードでは SMTP 認証できないので必須
 *   - ADMIN_EMAIL        通知の受信先 (採用担当宛 / 例: saiyou@bigsdc.co.jp)
 *
 * すべてのレシピでもログには記録するので、env が未設定でもフォーム自体は
 * "success" を返します（メールが飛ばないだけ）。
 */

export type EntryState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

type EntryPayload = {
  name: string;
  phone: string;
  email: string;
  age: string;
  message: string;
  receivedAt: string;
};

export async function submitEntry(formData: FormData): Promise<EntryState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const age = String(formData.get("age") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const agree = formData.get("agree");

  if (!name) {
    return { status: "error", message: "お名前を入力してください。" };
  }
  if (!phone) {
    return { status: "error", message: "電話番号を入力してください。" };
  }
  if (!agree) {
    return {
      status: "error",
      message: "プライバシーポリシーに同意してください。",
    };
  }

  const payload: EntryPayload = {
    name,
    phone,
    email,
    age,
    message,
    receivedAt: new Date().toISOString(),
  };

  // 1) サーバーログには必ず記録（Vercel Logs から検索可能）
  console.info("[entry] received", payload);

  // 2) Gmail SMTP でメール通知
  try {
    await sendByGmail(payload);
    return { status: "success" };
  } catch (err) {
    console.error("[entry] gmail send failed", err);
    return {
      status: "error",
      message:
        err instanceof Error
          ? `送信処理でエラーが発生しました: ${err.message}`
          : "送信処理でエラーが発生しました。",
    };
  }
}

async function sendByGmail(payload: EntryPayload): Promise<void> {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  const to = process.env.ADMIN_EMAIL;

  // env 未設定の場合はメール送信はスキップ。ログだけ残して成功扱い
  if (!user || !pass || !to) {
    console.warn(
      "[entry] GMAIL_USER / GMAIL_APP_PASSWORD / ADMIN_EMAIL が未設定のためメール送信をスキップしました"
    );
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  const subject = `【ビック測量 採用LP】新着応募 ${payload.name} 様`;

  const text = [
    "ビック測量設計株式会社 採用LPからの新着応募です。",
    "",
    `受付日時: ${payload.receivedAt}`,
    `お名前  : ${payload.name}`,
    `電話番号: ${payload.phone}`,
    `メール  : ${payload.email || "(未入力)"}`,
    `年齢    : ${payload.age || "(未入力)"}`,
    "",
    "ご質問・メッセージ:",
    payload.message || "(未入力)",
  ].join("\n");

  const html = `
    <div style="font-family: -apple-system, 'Hiragino Sans', sans-serif; color: #1f2937; line-height: 1.7;">
      <h2 style="color: #0f5c2c; margin: 0 0 16px;">採用LP 新着応募</h2>
      <p style="margin: 0 0 24px; color: #4b5563;">ビック測量設計株式会社 採用LPからの新着応募です。</p>
      <table style="border-collapse: collapse; width: 100%; max-width: 560px;">
        <tbody>
          <tr><td style="padding: 8px 12px; background: #f6f4ee; width: 110px; font-weight: bold;">受付日時</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${escapeHtml(payload.receivedAt)}</td></tr>
          <tr><td style="padding: 8px 12px; background: #f6f4ee; font-weight: bold;">お名前</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${escapeHtml(payload.name)}</td></tr>
          <tr><td style="padding: 8px 12px; background: #f6f4ee; font-weight: bold;">電話番号</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${escapeHtml(payload.phone)}</td></tr>
          <tr><td style="padding: 8px 12px; background: #f6f4ee; font-weight: bold;">メール</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${escapeHtml(payload.email) || "<span style='color:#9ca3af'>(未入力)</span>"}</td></tr>
          <tr><td style="padding: 8px 12px; background: #f6f4ee; font-weight: bold;">年齢</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${escapeHtml(payload.age) || "<span style='color:#9ca3af'>(未入力)</span>"}</td></tr>
        </tbody>
      </table>
      <h3 style="color: #0f5c2c; margin: 24px 0 8px;">ご質問・メッセージ</h3>
      <p style="white-space: pre-wrap; background: #f6f4ee; padding: 12px; margin: 0;">${escapeHtml(payload.message) || "<span style='color:#9ca3af'>(未入力)</span>"}</p>
    </div>
  `;

  await transporter.sendMail({
    from: user,
    to,
    replyTo: payload.email || undefined,
    subject,
    text,
    html,
  });
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
