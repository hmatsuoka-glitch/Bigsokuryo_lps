// 公式 LINE 応募導線
// ビッグ測量設計 公式 LINE
export const LINE_URL = "https://lin.ee/Upv91hI";
export const LINE_ID = "@bigsdc";

export function LineIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.5 2 2 5.6 2 10c0 4 3.6 7.4 8.5 8 .3.1.7.2.8.5.1.2.1.5.1.7l-.1.8c-.1.4-.3 1.4 1.2.8 1.5-.6 8.1-4.8 11.1-8.2C25.1 11 26 9.6 26 8 26 4.7 21.5 2 12 2zm-3.2 10.4H6.7c-.2 0-.4-.2-.4-.4V8c0-.2.2-.4.4-.4s.4.2.4.4v3.6h1.7c.2 0 .4.2.4.4s-.2.4-.4.4zm1.7-.4c0 .2-.2.4-.4.4s-.4-.2-.4-.4V8c0-.2.2-.4.4-.4s.4.2.4.4v4zm5 0c0 .2-.1.3-.3.4h-.1c-.1 0-.3-.1-.3-.2l-2.1-2.8V12c0 .2-.2.4-.4.4s-.4-.2-.4-.4V8c0-.2.1-.3.3-.4h.1c.1 0 .3.1.3.2L14.7 11V8c0-.2.2-.4.4-.4s.4.2.4.4v4zm3.2-2.4c.2 0 .4.2.4.4s-.2.4-.4.4h-1.4v.8h1.4c.2 0 .4.2.4.4s-.2.4-.4.4h-1.8c-.2 0-.4-.2-.4-.4V8c0-.2.2-.4.4-.4h1.8c.2 0 .4.2.4.4s-.2.4-.4.4h-1.4v.8h1.4z" />
    </svg>
  );
}

type LineButtonProps = {
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function LineButton({
  label = "公式LINEで応募する",
  size = "md",
  className = "",
}: LineButtonProps) {
  const sizeClass =
    size === "lg"
      ? "px-7 py-4 text-base"
      : size === "sm"
      ? "px-4 py-2 text-xs"
      : "px-6 py-3 text-sm";
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-3 bg-line hover:bg-line-dark text-white font-bold tracking-wider rounded-full transition-colors ${sizeClass} ${className}`}
    >
      <span className="w-7 h-7 rounded-full bg-white text-line grid place-items-center flex-none">
        <LineIcon className="w-4 h-4" />
      </span>
      {label}
      <span aria-hidden>→</span>
    </a>
  );
}
