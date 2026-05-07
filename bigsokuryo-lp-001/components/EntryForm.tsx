"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { COMPANY, SITE } from "@/lib/site";
import { Reveal } from "@/components/Motion";

type Status = "idle" | "submitting" | "success" | "error";

const tracks = [
  "新卒採用（2027年卒）",
  "中途採用（経験者・既卒）",
  "迷っている／相談したい",
];

const sources = [
  "大学・学校の就職課",
  "求人媒体・求人サイト",
  "知人・OB/OG紹介",
  "公式LINE",
  "SNS",
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
    <section id="entry" className="py-24 md:py-32 bg-sand">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.5em] text-gold-dark text-center font-bold">
            ENTRY
          </p>
          <h2 className="mt-3 font-sans font-black text-4xl md:text-5xl text-navy text-center heading-display">
            エントリー
          </h2>
          <p className="mt-5 text-sm md:text-base text-navy/75 text-center leading-relaxed">
            カジュアル面談のみのご相談も歓迎。
            <br />
            お預かりした情報は採用業務以外に使用しません。
          </p>

          <div className="mt-8 mx-auto max-w-md rounded-2xl bg-emerald-50 border border-emerald-200 p-4 flex items-center gap-3 hover:border-emerald-400 transition-colors">
            <span className="w-10 h-10 rounded-full bg-[#06C755] grid place-items-center text-white font-black text-base shrink-0 shadow-soft">
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
                className="text-emerald-700 underline-grow text-xs"
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
              className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 p-10 text-center shadow-soft"
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
                className="mx-auto w-16 h-16 rounded-full bg-emerald-500 grid place-items-center text-white text-3xl shadow-soft"
              >
                ✓
              </motion.div>
              <h3 className="mt-5 font-sans font-bold text-2xl text-navy">
                送信ありがとうございました
              </h3>
              <p className="mt-3 text-sm text-navy/75 leading-relaxed">
                {COMPANY.recruitContact.department} {COMPANY.recruitContact.name}
                より2営業日以内にご連絡いたします。
                <br />
                急ぎの場合は公式LINEからもご連絡ください。
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 text-xs text-navy/60 underline-grow"
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
              className="mt-12 grid gap-6 bg-white rounded-2xl border border-navy/10 shadow-soft p-6 md:p-10"
            >
              <Select
                label="ご応募コース"
                name="track"
                options={tracks}
                required
              />

              <div className="grid md:grid-cols-2 gap-6">
                <Field label="お名前" name="name" type="text" required placeholder="山田 太郎" />
                <Field label="フリガナ" name="kana" type="text" placeholder="ヤマダ タロウ" />
                <Field label="メールアドレス" name="email" type="email" required placeholder="example@mail.com" />
                <Field label="電話番号" name="phone" type="tel" placeholder="090-0000-0000" />
                <Field label="学校／前職" name="school_or_prev" type="text" placeholder="○○大学 ○○学部 ／ ○○株式会社" />
                <Field label="卒業（見込）年" name="grad_year" type="text" placeholder="2027年3月" />
              </div>

              <Select
                label="本ページを知ったきっかけ"
                name="source"
                options={sources}
              />

              <label className="block">
                <span className="text-xs tracking-widest text-navy/70 font-bold">
                  ご質問・志望動機（任意）
                </span>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-2 w-full border border-navy/15 rounded-lg bg-white px-3.5 py-3 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none resize-none text-sm transition-colors"
                  placeholder="例：カジュアル面談希望／鉄道工事の現場について聞きたい／資格について知りたい など"
                />
              </label>

              <label className="flex items-start gap-3 text-xs text-navy/75">
                <input
                  type="checkbox"
                  name="agree"
                  required
                  className="mt-0.5 accent-navy w-4 h-4"
                />
                <span>
                  個人情報の取扱い・
                  <a href="#" className="underline-grow text-gold-dark">
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
                className="group relative mt-2 bg-navy hover:bg-gold text-white py-4 rounded-full text-sm tracking-[0.25em] font-bold transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-soft hover:shadow-gold overflow-hidden"
              >
                {status === "submitting" ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                    送信中...
                  </>
                ) : (
                  <>
                    送信する
                    <span className="inline-block transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </>
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

              <p className="text-center text-xs text-navy/55 mt-2">
                直接のお問い合わせは{" "}
                <a
                  href={`mailto:${COMPANY.recruitContact.email}`}
                  className="text-gold-dark underline-grow"
                >
                  {COMPANY.recruitContact.email}
                </a>{" "}
                まで。
              </p>
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
      <span className="text-xs tracking-widest text-navy/70 font-bold">
        {label}
        {required && <span className="ml-1 text-gold-dark">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border border-navy/15 rounded-lg bg-white px-3.5 py-3 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none text-sm transition-colors"
      />
    </label>
  );
}

type SelectProps = {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
};

function Select({ label, name, options, required }: SelectProps) {
  return (
    <label className="block">
      <span className="text-xs tracking-widest text-navy/70 font-bold">
        {label}
        {required && <span className="ml-1 text-gold-dark">*</span>}
      </span>
      <select
        name={name}
        defaultValue=""
        required={required}
        className="mt-2 w-full border border-navy/15 rounded-lg bg-white px-3.5 py-3 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none text-sm transition-colors"
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
