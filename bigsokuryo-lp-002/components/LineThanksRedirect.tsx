"use client";

import { useEffect, useState } from "react";
import { LMASTERS_URL } from "@/components/LineButton";
import { trackLineThanksReached } from "@/lib/analytics";

const REDIRECT_DELAY_MS = 4000;

export default function LineThanksRedirect() {
  const [secondsLeft, setSecondsLeft] = useState(
    Math.ceil(REDIRECT_DELAY_MS / 1000)
  );

  useEffect(() => {
    // ページ到達直後、自動リダイレクトより前に TikTok Pixel Contact を発火
    trackLineThanksReached();

    const redirectTimer = window.setTimeout(() => {
      window.location.href = LMASTERS_URL;
    }, REDIRECT_DELAY_MS);

    const countdownTimer = window.setInterval(() => {
      setSecondsLeft((s) => Math.max(0, s - 1));
    }, 1000);

    return () => {
      window.clearTimeout(redirectTimer);
      window.clearInterval(countdownTimer);
    };
  }, []);

  return (
    <main className="min-h-screen bg-brand-soft flex items-center justify-center px-5 py-16">
      <div className="w-full max-w-sm text-center bg-white rounded-2xl shadow-lg px-6 py-10 md:px-10 md:py-12">
        <span
          aria-hidden
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white text-2xl font-bold"
        >
          L
        </span>

        <h1 className="mt-6 font-sans font-extrabold text-lg md:text-xl text-brand-deep leading-snug">
          まもなく LINE 公式アカウントに
          <br />
          移動します
        </h1>

        <p className="mt-3 text-sm text-sub leading-relaxed">
          自動的に画面が切り替わらない場合は、
          <br />
          下のボタンからお進みください。
        </p>

        <div
          aria-hidden
          className="mx-auto mt-6 h-8 w-8 animate-spin rounded-full border-4 border-brand-outline border-t-brand"
        />

        <p className="mt-2 text-xs text-sub/70" aria-live="polite">
          {secondsLeft > 0 ? `${secondsLeft} 秒後に自動で移動します` : "移動しています…"}
        </p>

        <a
          href={LMASTERS_URL}
          className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-line hover:bg-line-dark text-white font-bold tracking-wider px-6 py-4 text-sm transition-colors"
        >
          LINE を開く
          <span aria-hidden>→</span>
        </a>
      </div>
    </main>
  );
}
