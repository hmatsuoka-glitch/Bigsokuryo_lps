type Props = {
  text?: string;
  className?: string;
};

export default function Marquee({
  text = "BIG SURVEY AND DESIGN",
  className = "",
}: Props) {
  const item = ` ${text} ・ `;
  const line = item.repeat(6);
  return (
    <div
      aria-hidden
      className={`relative overflow-hidden select-none py-2 md:py-4 ${className}`}
    >
      <div className="flex whitespace-nowrap animate-marquee font-display font-extrabold text-[10vw] md:text-[8vw] leading-none tracking-tight text-transparent"
        style={{
          WebkitTextStroke: "1.5px #D4EADF",
        }}
      >
        <span>{line}</span>
        <span>{line}</span>
      </div>
    </div>
  );
}
