"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState, useTransition } from "react";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/Motion";
import { submitEntry, type EntryState } from "@/app/actions";

export default function EntryForm() {
  const [state, setState] = useState<EntryState>({ status: "idle" });
  const [isPending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);

  function handleAction(formData: FormData) {
    startTransition(async () => {
      const result = await submitEntry(formData);
      setState(result);
      if (result.status === "success") {
        formRef.current?.reset();
      }
    });
  }

  return (
    <section id="entry" className="py-24 md:py-32 bg-sand">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.5em] text-gold-dark text-center font-bold">
            ENTRY
          </p>
          <h2 className="mt-3 font-sans font-black text-4xl md:text-5xl text-navy text-center heading-display">
            エントリーフォーム
          </h2>
          <p className="mt-5 text-sm md:text-base text-zinc-700 text-center leading-relaxed">
            カジュアル面談のみのご相談も歓迎。
            <br />
            お預かりした情報は採用業務以外に使用しません。
          </p>

          {/* LINE 副導線 */}
          <div className="mt-8 mx-auto max-w-md bg-emerald-50 border border-navy/20 p-4 flex items-center gap-3 hover:border-navy/40 transition-colors">
            <span className="w-10 h-10 rounded-full bg-[#06C755] grid place-items-center text-white font-black text-base shrink-0 shadow-soft">
              L
            </span>
            <div className="flex-1 text-sm">
              <p className="font-bold text-navy">
                先にLINEでサクッと相談したい方へ
              </p>
              <a
                href={SITE.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy underline-grow text-xs"
              >
                公式LINEを開く →
              </a>
            </div>
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          {state.status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-12 bg-gradient-to-br from-emerald-50 to-white border border-navy/20 p-10 text-center shadow-soft"
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
                className="mx-auto w-16 h-16 rounded-full bg-navy grid place-items-center text-white text-3xl shadow-soft"
              >
                ✓
              </motion.div>
              <h3 className="mt-5 font-sans font-bold text-2xl text-navy">
                送信ありがとうございました
              </h3>
              <p className="mt-3 text-sm text-zinc-700 leading-relaxed">
                採用担当より2営業日以内にご連絡いたします。
                <br />
                急ぎの場合は公式LINEからもご連絡ください。
              </p>
              <button
                type="button"
                onClick={() => setState({ status: "idle" })}
                className="mt-6 text-xs text-zinc-500 underline-grow"
              >
                もう一度送る
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              ref={formRef}
              action={handleAction}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-12 grid gap-6 bg-white border border-navy/10 shadow-soft p-6 md:p-10"
            >
              <Field
                label="お名前"
                name="name"
                type="text"
                required
                placeholder="山田 太郎"
              />
              <Field
                label="電話番号"
                name="phone"
                type="tel"
                required
                placeholder="090-0000-0000"
              />
              <Field
                label="メールアドレス"
                name="email"
                type="email"
                placeholder="example@mail.com"
              />
              <Field
                label="年齢"
                name="age"
                type="text"
                placeholder="例:28"
              />

              <label className="block">
                <span className="text-xs tracking-widest text-zinc-600 font-bold">
                  ご質問(任意)
                </span>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-2 w-full border border-navy/15 bg-white px-3.5 py-3 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none resize-none text-sm transition-colors"
                  placeholder="例:カジュアル面談希望／鉄道工事の現場について聞きたい／資格について知りたい など"
                />
              </label>

              <label className="flex items-start gap-3 text-xs text-zinc-700">
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
                whileHover={{ scale: isPending ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isPending}
                className="group mt-2 bg-navy hover:bg-navy-dark text-white py-4 text-sm tracking-[0.25em] font-bold transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-soft"
              >
                {isPending ? (
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

              {state.status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-red-600"
                >
                  {state.message}
                </motion.p>
              )}

              <p className="text-center text-[11px] text-zinc-400 mt-2 leading-relaxed">
                採用選考時、合否をちらつかせた連絡先要求等の不適切な行為は一切行いません。
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
      <span className="text-xs tracking-widest text-zinc-600 font-bold">
        {label}
        {required && <span className="ml-1 text-gold-dark">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border border-navy/15 bg-white px-3.5 py-3 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none text-sm transition-colors"
      />
    </label>
  );
}
