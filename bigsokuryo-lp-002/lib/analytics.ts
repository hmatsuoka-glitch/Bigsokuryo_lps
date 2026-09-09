// クライアントサイドのカスタムイベント発火ヘルパー
// SSR 環境では何もしない。Pixel/タグ未ロード時も安全にスキップする。

type TtqMethod = (...args: unknown[]) => void;
type Ttq = {
  track: TtqMethod;
  page?: TtqMethod;
};
type Gtag = (...args: unknown[]) => void;
type Fbq = (...args: unknown[]) => void;

declare global {
  interface Window {
    ttq?: Ttq;
    gtag?: Gtag;
    dataLayer?: unknown[];
    fbq?: Fbq;
  }
}

/**
 * 公式LINEボタンクリック時に発火。
 * GA4 `line_cta_click` / `line_click`。
 * TikTok Pixel `Contact` はここでは発火させない
 * (遷移先の中間ページ /line-thanks/ 到達時に trackLineThanksReached() で発火させ、
 * ページ離脱による計測漏れ・二重計測を防ぐ)。
 */
/**
 * position: hero / sticky / mid / entry / modal / qr / header / hamburger
 */
export function trackLineClick(location?: string) {
  if (typeof window === "undefined") return;
  const position = location ?? "unknown";
  try {
    window.gtag?.("event", "line_cta_click", { position });
    // 旧イベント (後方互換)
    window.gtag?.("event", "line_click", { event_label: position });
  } catch {}
}

/**
 * 中間ページ (/line-thanks/) 到達時に発火。
 * TikTok Pixel `Contact`。lmasters への自動リダイレクト前に
 * 同期的に呼ぶこと。
 */
export function trackLineThanksReached() {
  if (typeof window === "undefined") return;
  try {
    window.ttq?.track("Contact", { content_id: "line_thanks_page" });
  } catch {}
}

/**
 * 中間ページ (/line-thanks/) 到達時に発火。
 * Meta Pixel `Lead`。TikTok の Contact と同じタイミング (lmasters への
 * 自動リダイレクト前) に同期的に呼ぶこと。Meta ベースコード未設置時は
 * window.fbq が存在しないため何もしない。
 */
export function trackMetaLeadReached() {
  if (typeof window === "undefined") return;
  try {
    window.fbq?.("track", "Lead");
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
