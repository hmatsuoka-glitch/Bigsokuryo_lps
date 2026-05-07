import { COMPANY } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="bg-navy-dark text-white/70 py-14">
      <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-serif text-xl text-white">
            BIG <span className="text-gold">SOKURYO</span>
          </p>
          <p className="mt-2 text-xs text-white/50">{COMPANY.nameEn}</p>
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
            className="text-sm text-gold hover:underline break-all"
          >
            {COMPANY.recruitContact.email}
          </a>
          <p className="mt-3 text-xs text-white/50">
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
