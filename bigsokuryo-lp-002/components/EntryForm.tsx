"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { LineButton } from "./LineButton";
import { trackFormSubmit } from "@/lib/analytics";

type Props = {
  accentClass?: string;
  category: string;
};

type Status = "idle" | "submitting" | "ok" | "error";

export default function EntryForm({
  accentClass = "bg-brand hover:bg-brand-dark",
  category,
}: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const fd = new FormData(formEl);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      message: String(fd.get("message") || ""),
    };

    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "送信に失敗しました");
      setStatus("ok");
      formEl.reset();
      trackFormSubmit("entry_form");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "送信に失敗しました");
    }
  }

  const submitting = status === "submitting";

  return (
    <section id="entry" className="py-20 md:py-28 bg-sand/40">
      <div className="relative max-w-3xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-brand">APPLY</p>
          <h2 className="mt-3 font-sans font-bold text-3xl md:text-5xl text-navy leading-tight">
            エントリー
          </h2>
          <p className="mt-5 text-sm md:text-base text-black/70 leading-relaxed">
            {category}採用へのご応募・ご質問はこちらから。
            カジュアル面談のみのお問い合わせも歓迎です。
            公式 LINE またはフォームからお選びください。
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10 md:mt-14">
          <div className="bg-white border border-navy/10 p-6 md:p-8">
            <div className="flex items-baseline justify-between flex-wrap gap-3 pb-5 mb-5 border-b border-navy/10">
              <p className="text-xs tracking-[0.4em] text-brand">QUICK CONTACT</p>
              <p className="text-[11px] text-black/55">最短ルートで応募する</p>
            </div>
            <LineButton size="lg" className="w-full" location="entry_form" />
            <p className="mt-3 text-[11px] text-black/55 text-center">
              ※ LINE は匿名でのご相談も可能です
            </p>
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-8 md:mt-10">
          <div className="flex items-center gap-4 mb-6">
            <span aria-hidden className="h-px flex-1 bg-navy/15" />
            <span className="text-[10px] tracking-[0.4em] text-black/45">
              OR FORM
            </span>
            <span aria-hidden className="h-px flex-1 bg-navy/15" />
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-navy/10 p-6 md:p-10 grid gap-6"
            noValidate
          >
            <Field label="お名前" required>
              <input
                name="name"
                type="text"
                required
                disabled={submitting}
                className="w-full border border-navy/20 bg-white px-4 py-3 text-sm md:text-base focus:border-brand outline-none transition-colors disabled:bg-sand/30"
              />
            </Field>
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="メールアドレス" required>
                <input
                  name="email"
                  type="email"
                  required
                  disabled={submitting}
                  className="w-full border border-navy/20 bg-white px-4 py-3 text-sm md:text-base focus:border-brand outline-none transition-colors disabled:bg-sand/30"
                />
              </Field>
              <Field label="電話番号">
                <input
                  name="phone"
                  type="tel"
                  disabled={submitting}
                  className="w-full border border-navy/20 bg-white px-4 py-3 text-sm md:text-base focus:border-brand outline-none transition-colors disabled:bg-sand/30"
                />
              </Field>
            </div>
            <Field label="ご質問・志望動機">
              <textarea
                name="message"
                rows={5}
                disabled={submitting}
                className="w-full border border-navy/20 bg-white px-4 py-3 text-sm md:text-base focus:border-brand outline-none resize-none transition-colors disabled:bg-sand/30"
              />
            </Field>

            {status === "ok" && (
              <div className="bg-brand/10 border border-brand/30 text-brand-dark text-sm px-4 py-3 leading-relaxed">
                <p className="font-bold">送信ありがとうございました。</p>
                <p className="mt-1">採用担当より 2 営業日以内にご連絡いたします。</p>
                <p className="mt-1">急ぎの場合は公式 LINE からもご連絡ください。</p>
              </div>
            )}
            {status === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3">
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className={`mt-2 ${accentClass} text-white py-4 text-sm tracking-[0.25em] font-bold transition-all hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed`}
            >
              {submitting ? "送信中..." : "送信する →"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="flex items-center gap-2 text-xs tracking-widest text-black/70 mb-2">
        {label}
        {required && (
          <span className="text-[10px] bg-brand text-white px-1.5 py-0.5 tracking-normal">
            必須
          </span>
        )}
      </span>
      {children}
    </label>
  );
}
