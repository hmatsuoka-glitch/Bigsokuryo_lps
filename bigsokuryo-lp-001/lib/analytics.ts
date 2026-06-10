// クライアントサイドのカスタムイベント発火ヘルパー
// SSR 環境では何もしない。Pixel/タグ未ロード時も安全にスキップする。

type TtqMethod = (...args: unknown[]) => void;
type Ttq = {
  track: TtqMethod;
  page?: TtqMethod;
};
type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    ttq?: Ttq;
    gtag?: Gtag;
    dataLayer?: unknown[];
  }
}

/**
 * 公式LINEボタンクリック時に発火。
 * TikTok Pixel `Contact` ＋ GA4 `line_click`。
 */
export function trackLineClick(location?: string) {
  if (typeof window === "undefined") return;
  try {
    window.ttq?.track("Contact", { content_id: location ?? "line_button" });
  } catch {}
  try {
    window.gtag?.("event", "line_click", {
      event_category: "engagement",
      event_label: location ?? "line_button",
    });
  } catch {}
}

/**
 * 応募フォーム送信成功時に発火。
 * TikTok Pixel `SubmitForm` (Lead) ＋ GA4 `form_submit`。
 * バリデーション失敗や送信エラー時は呼ばないこと。
 */
export function trackFormSubmit(location?: string) {
  if (typeof window === "undefined") return;
  try {
    window.ttq?.track("SubmitForm", { content_id: location ?? "entry_form" });
  } catch {}
  try {
    window.gtag?.("event", "form_submit", {
      event_category: "conversion",
      event_label: location ?? "entry_form",
    });
  } catch {}
}
