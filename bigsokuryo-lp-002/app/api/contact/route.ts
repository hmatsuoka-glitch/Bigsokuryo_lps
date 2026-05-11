import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json(
      { error: "リクエストの形式が正しくありません" },
      { status: 400 }
    );
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const message = (body.message || "").trim();

  if (!name || !email) {
    return NextResponse.json(
      { error: "お名前とメールアドレスは必須です" },
      { status: 400 }
    );
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  const adminEmail = process.env.ADMIN_EMAIL;

  if (!gmailUser || !gmailPass || !adminEmail) {
    console.error("Missing env vars", {
      hasUser: !!gmailUser,
      hasPass: !!gmailPass,
      hasAdmin: !!adminEmail,
    });
    return NextResponse.json(
      { error: "サーバー設定エラー (環境変数が未設定)" },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailPass },
  });

  const adminBody = [
    "big-sokuryo02 から応募がありました。",
    "",
    "ビッグ測量設計 LP-002 (中途採用) より新規エントリーがありました。",
    "",
    `■ お名前: ${name}`,
    `■ メール: ${email}`,
    `■ 電話: ${phone || "(未入力)"}`,
    "",
    "■ ご質問・志望動機:",
    message || "(未入力)",
    "",
    `受信日時: ${new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" })}`,
  ].join("\n");

  const autoReplyBody = [
    `${name} 様`,
    "",
    "この度はビッグ測量設計株式会社へのエントリーをいただき、誠にありがとうございます。",
    "下記内容で受け付けいたしました。2〜3 営業日以内に採用窓口よりご連絡いたします。",
    "",
    "------------------------------",
    `お名前: ${name}`,
    `メール: ${email}`,
    `電話: ${phone || "(未入力)"}`,
    "",
    "ご質問・志望動機:",
    message || "(未入力)",
    "------------------------------",
    "",
    "※ このメールは送信専用です。返信は saiyou@bigsdc.co.jp 宛にお願いいたします。",
    "",
    "──────────────",
    "ビッグ測量設計株式会社",
    "人事部 須藤 翠",
    "〒110-0015 東京都台東区東上野 1-26-8",
    "TEL: 03-3837-0291",
    "MAIL: saiyou@bigsdc.co.jp",
    "──────────────",
  ].join("\n");

  try {
    await transporter.sendMail({
      from: `"ビッグ測量設計 LP" <${gmailUser}>`,
      to: adminEmail,
      replyTo: email,
      subject: `【big-sokuryo02 から応募がありました】${name} 様`,
      text: adminBody,
    });

    await transporter.sendMail({
      from: `"ビッグ測量設計株式会社" <${gmailUser}>`,
      to: email,
      subject: "【ビッグ測量設計】エントリーありがとうございます",
      text: autoReplyBody,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Mail send failed:", err);
    return NextResponse.json(
      { error: "送信に失敗しました。しばらく経ってから再度お試しください。" },
      { status: 500 }
    );
  }
}
