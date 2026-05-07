"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/Motion";

type Status = "idle" | "submitting" | "success" | "error";

const positions = [
  "測量技術職（公共／民間）",
  "3D計測オペレーター",
  "CAD・図面作成スタッフ",
  "点群処理・BIM/CIM",
  "未定／相談したい",
];

const sources = [
  "学校の就職課",
  "求人サイト",
  "知人・OB/OG紹介",
  "公式LINE",
  "その他",
];

export default function EntryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      if (SITE.entryEndpoint) {
        const res = await fetch(SITE.entryEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
      } else {
        // フォールバック: コンソール出力（実装前の確認用）
        console.info("[entry] preview submit", data);
        await new Promise((r) => setTimeout(r, 700));
      }
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "送信に失敗しました");
      setStatus("error");
    }
  }

  return (
    <section id="entry" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold text-center">ENTRY</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-navy text-center">
            新卒・第二新卒エントリー
          </h2>
          <p className="mt-4 text-sm text-navy/70 text-center">
            ご質問・カジュアル面談のみのお問い合わせも歓迎です。
          </p>

          {/* LINE 副導線 */}
          <div className="mt-8 mx-auto max-w-md rounded-2xl bg-emerald-50 border border-emerald-200 p-4 flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-[#06C755] grid place-items-center text-white font-bold text-sm">
              L
            </span>
            <div className="flex-1 text-sm">
              <p className="font-bold text-emerald-900">
                先にLINEでサクッと相談したい方へ
              </p>
              <a
                href={SITE.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 underline-offset-2 hover:underline text-xs"
              >
                公式LINEを開く →
              </a>
            </div>
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-50 to-sand border border-emerald-200 p-10 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 14,
                }}
                className="mx-auto w-16 h-16 rounded-full bg-emerald-500 grid place-items-center text-white text-3xl"
              >
                ✓
              </motion.div>
              <h3 className="mt-5 font-serif text-2xl text-navy">
                送信ありがとうございました
              </h3>
              <p className="mt-3 text-sm text-navy/70">
                採用担当より2営業日以内にメールでご連絡いたします。<br />
                急ぎの場合は公式LINEからもご連絡ください。
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 text-xs text-navy/60 underline-offset-2 hover:underline"
              >
                もう一度送る
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="mt-12 grid gap-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <Field
                  label="お名前"
                  name="name"
                  type="text"
                  required
                  placeholder="山田 太郎"
                />
                <Field
                  label="フリガナ"
                  name="kana"
                  type="text"
                  placeholder="ヤマダ タロウ"
                />
                <Field
                  label="メールアドレス"
                  name="email"
                  type="email"
                  required
                  placeholder="example@mail.com"
                />
                <Field
                  label="電話番号"
                  name="phone"
                  type="tel"
                  placeholder="090-0000-0000"
                />
                <Field
                  label="学校名・学部学科"
                  name="school"
                  type="text"
                  placeholder="○○大学 ○○学部"
                />
                <Field
                  label="卒業（見込）年"
                  name="grad_year"
                  type="text"
                  placeholder="2027年3月"
                />
              </div>

              <Select
                label="ご希望の職種"
                name="position"
                options={positions}
              />
              <Select
                label="本ページを知ったきっかけ"
                name="source"
                options={sources}
              />

              <label className="block">
                <span className="text-xs tracking-widest text-navy/70">
                  ご質問・志望動機（任意）
                </span>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-2 w-full border border-navy/15 rounded-lg bg-white px-3 py-2.5 focus:border-gold focus:ring-1 focus:ring-gold outline-none resize-none text-sm"
                  placeholder="例：カジュアル面談希望／資格について聞きたい／など"
                />
              </label>

              <label className="flex items-start gap-3 text-xs text-navy/70">
                <input
                  type="checkbox"
                  name="agree"
                  required
                  className="mt-0.5 accent-navy"
                />
                <span>
                  <a href="#" className="underline">
                    プライバシーポリシー
                  </a>
                  に同意のうえ送信します。
                </span>
              </label>

              <motion.button
                whileHover={{ scale: status === "submitting" ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 bg-navy hover:bg-gold text-white py-4 rounded-full text-sm tracking-widest transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {status === "submitting" ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                    送信中...
                  </>
                ) : (
                  "送信する"
                )}
              </motion.button>

              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-red-600"
                >
                  送信できませんでした。{error}
                </motion.p>
              )}
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
};

function Field({ label, name, type, required, placeholder }: FieldProps) {
  return (
    <label className="block">
      <span className="text-xs tracking-widest text-navy/70">
        {label}
        {required && <span className="ml-1 text-gold">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border border-navy/15 rounded-lg bg-white px-3 py-2.5 focus:border-gold focus:ring-1 focus:ring-gold outline-none text-sm"
      />
    </label>
  );
}

type SelectProps = {
  label: string;
  name: string;
  options: string[];
};

function Select({ label, name, options }: SelectProps) {
  return (
    <label className="block">
      <span className="text-xs tracking-widest text-navy/70">{label}</span>
      <select
        name={name}
        defaultValue=""
        className="mt-2 w-full border border-navy/15 rounded-lg bg-white px-3 py-2.5 focus:border-gold focus:ring-1 focus:ring-gold outline-none text-sm"
      >
        <option value="" disabled>
          選択してください
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
