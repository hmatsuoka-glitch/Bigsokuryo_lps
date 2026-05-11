"use server";

/**
 * 応募フォームの送信ハンドラ。
 *
 * このコードは Next.js の Server Action として実行されます。
 * クライアントから submitEntry(formData) で呼び出され、
 * サーバー側で:
 *   - 入力のバリデーション
 *   - サーバーログへの記録（必須）
 *   - 任意の通知（環境変数で外部送信先を切り替え）
 * を行います。
 *
 * 通知方式を増やしたい場合は notify() を編集してください。
 *   - Resend (メール): RESEND_API_KEY と RECRUIT_NOTIFY_TO を環境変数に設定
 *   - Slack: SLACK_WEBHOOK_URL を環境変数に設定
 *   - そのほか: webhook 等を fetch で呼び出すコードを追加
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

  // バリデーション: 必須項目
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

  try {
    // 1) サーバーログに記録（Vercel のログから検索可能）
    console.info("[entry] received", payload);

    // 2) 任意の通知
    await notify(payload);

    return { status: "success" };
  } catch (err) {
    console.error("[entry] failed", err);
    return {
      status: "error",
      message:
        err instanceof Error
          ? err.message
          : "送信処理でエラーが発生しました。",
    };
  }
}

/**
 * 通知の振り分け。環境変数が設定されている方式だけ発火します。
 * すべて未設定なら、サーバーログ記録のみで完了します。
 */
async function notify(payload: EntryPayload): Promise<void> {
  await Promise.all([
    notifyByResend(payload),
    notifyBySlack(payload),
  ]);
}

async function notifyByResend(payload: EntryPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.RECRUIT_NOTIFY_TO;
  const from =
    process.env.RECRUIT_NOTIFY_FROM ?? "onboarding@resend.dev";

  if (!apiKey || !to) return;

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

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to: [to], subject, text }),
  });

  if (!res.ok) {
    throw new Error(`Resend HTTP ${res.status}`);
  }
}

async function notifyBySlack(payload: EntryPayload): Promise<void> {
  const url = process.env.SLACK_WEBHOOK_URL;
  if (!url) return;

  const text = [
    `*新着応募* 👤 ${payload.name}`,
    `📞 ${payload.phone}`,
    payload.email && `✉️ ${payload.email}`,
    payload.age && `🎂 ${payload.age}`,
    payload.message && `💬 ${payload.message}`,
    `🕒 ${payload.receivedAt}`,
  ]
    .filter(Boolean)
    .join("\n");

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  if (!res.ok) {
    throw new Error(`Slack HTTP ${res.status}`);
  }
}
