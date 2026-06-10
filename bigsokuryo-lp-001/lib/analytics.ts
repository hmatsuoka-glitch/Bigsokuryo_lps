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
 * <a target="_blank"> のクリックハンドラ内で同期的に呼ぶこと
 * (遷移より前にビーコンを発火させるため)。
 */
export function trackLineClick(location?: string) {
  if (typeof window === "undefined") return;
  const label = location ?? "line_button";
  try {
    window.ttq?.track("Contact", { content_id: label });
  } catch {}
  try {
    window.gtag?.("event", "line_click", { event_label: label });
  } catch {}
}

/**
 * 応募フォーム送信成功時に発火。
 * TikTok Pixel `SubmitForm` (Lead) ＋ GA4 `form_submit`。
 * バリデーション失敗や送信エラー時は呼ばないこと。
 */
export function trackFormSubmit(location?: string) {
  if (typeof window === "undefined") return;
  const id = location ?? "entry_form";
  try {
    window.ttq?.track("SubmitForm", { content_id: id });
  } catch {}
  try {
    window.gtag?.("event", "form_submit", { content_id: id });
  } catch {}
}
