import Image from "next/image";
import { COMPANY } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-white/75 py-14">
      <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <Image
              src="/header_logo.png"
              alt="ビッグ測量設計株式会社"
              width={94}
              height={70}
              className="h-9 w-auto bg-white p-1"
            />
            <p className="font-sans font-black text-lg text-white heading-display leading-none">
              BIG <span className="text-white/80">SOKURYO</span>
            </p>
          </div>
          <p className="mt-2 text-xs text-white/55">{COMPANY.nameEn}</p>
          <p className="mt-4 text-sm leading-relaxed">
            {COMPANY.name}
            <br />
            {COMPANY.address}
            <br />
            TEL: {COMPANY.tel}　FAX: {COMPANY.fax}
          </p>
          <p className="mt-3 text-xs text-white/50">
            {COMPANY.registration}
          </p>
        </div>

        <div>
          <p className="text-white text-sm tracking-widest mb-3">アクセス</p>
          <ul className="text-sm space-y-1.5">
            {COMPANY.access.map((a) => (
              <li key={a}>・{a}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white text-sm tracking-widest mb-3">採用窓口</p>
          <p className="text-sm">
            {COMPANY.recruitContact.department}　{COMPANY.recruitContact.name}
          </p>
          <a
            href={`mailto:${COMPANY.recruitContact.email}`}
            className="text-sm text-white hover:underline break-all"
          >
            {COMPANY.recruitContact.email}
          </a>
          <p className="mt-3 text-xs text-white/55">
            営業時間 {COMPANY.hours}
          </p>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-white/40">
        © {COMPANY.name}
      </div>
    </footer>
  );
}
