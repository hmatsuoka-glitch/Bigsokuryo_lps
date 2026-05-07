const clients = [
  "東京都 (建設局・港湾局・財務局・都市整備局)",
  "環境省",
  "JR東日本コンサルタンツ",
  "JR東日本建築設計事務所",
  "JR東日本メカトロニクス",
  "ジェイアール東海コンサルタンツ",
  "鹿島建設",
  "大林組",
  "清水建設",
  "大成建設",
  "戸田建設",
  "三井住友建設",
  "前田建設工業",
  "東鉄工業",
  "鉄建建設",
  "東京電力パワーグリッド",
  "日立製作所",
  "森ビル",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5">
          <p className="text-xs tracking-[0.4em] text-gold">WHY US</p>
          <h2 className="mt-3 font-sans font-bold text-3xl md:text-4xl text-navy leading-snug">
            「ただ測る」<br />会社では、ない。
          </h2>
          <p className="mt-6 text-sm text-navy/70 leading-relaxed">
            創業 1980 年。鉄道工事測量を起点に、東京の重要インフラ整備を
            技術で支えてきた総合測量会社です。線路閉鎖作業・営業線近接作業
            など高難度の鉄道現場で積み上げた実績が、私たちの背骨です。
          </p>
        </div>
        <div className="md:col-span-7 space-y-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="rounded-2xl border border-navy/10 p-5">
              <p className="text-2xl md:text-3xl font-bold text-navy">45<span className="text-sm ml-1">年</span></p>
              <p className="text-[11px] tracking-widest text-navy/60 mt-2">創業からの歴史</p>
            </div>
            <div className="rounded-2xl border border-navy/10 p-5">
              <p className="text-2xl md:text-3xl font-bold text-navy">163<span className="text-sm ml-1">名</span></p>
              <p className="text-[11px] tracking-widest text-navy/60 mt-2">社員数 (&apos;24年3月)</p>
            </div>
            <div className="rounded-2xl border border-navy/10 p-5">
              <p className="text-2xl md:text-3xl font-bold text-navy">36<span className="text-sm ml-1">名</span></p>
              <p className="text-[11px] tracking-widest text-navy/60 mt-2">測量士有資格者</p>
            </div>
          </div>
          <div className="rounded-2xl border border-navy/10 p-6">
            <p className="text-xs tracking-widest text-gold mb-3">主な取引先 (一部)</p>
            <ul className="flex flex-wrap gap-2 text-xs md:text-sm text-navy/85">
              {clients.map((c) => (
                <li
                  key={c}
                  className="border border-navy/15 rounded-full px-3 py-1.5"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-navy/70 leading-relaxed border-l-4 border-gold pl-4">
            東京都・JR グループ・大手ゼネコン ―― 名前を聞けば誰もが知る現場で、
            「ビッグ測量設計」の社名は成果品にそのまま記され、責任とともに刻まれます。
          </p>
        </div>
      </div>
    </section>
  );
}
