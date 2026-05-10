import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  objectPosition?: string;
};

export default function PhotoBand({
  src,
  alt,
  caption,
  objectPosition = "center",
}: Props) {
  return (
    <section className="relative w-full bg-navy-dark">
      <div className="relative w-full aspect-[16/5] md:aspect-[16/4] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          quality={95}
          sizes="(max-width: 1024px) 100vw, 1760px"
          style={{ objectPosition }}
          className="object-cover"
        />
        {caption && (
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/70 to-transparent">
            <p className="max-w-6xl mx-auto px-6 py-4 text-[10px] md:text-xs tracking-[0.4em] text-white/85 font-bold">
              {caption}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
