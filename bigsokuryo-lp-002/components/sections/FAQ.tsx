import TextReveal from "@/components/TextReveal";

const items = [
  {
    q: "本当に未経験でも大丈夫ですか？",
    a: "はい。現在活躍中の社員にも文系出身・他業種からの転身者が多数います。入社後は先輩とペアで現場に入り、社内勉強会（年 3 回）と資格取得支援でじっくり育てます。",
  },
  {
    q: "資格はいつまでに取ればいいですか？費用は？",
    a: "入社時に資格は不要です。測量士補・測量士の試験費用は会社が全額負担します。取得ペースも本人の状況に合わせて相談できます。",
  },
  {
    q: "夜勤はどのくらいありますか？体力に自信がなくても平気？",
    a: "鉄道関連の現場では夜勤（20:00〜翌 5:00）がありますが、短縮勤務の日もあります。班体制で無理のないローテーションを組んでいます。",
  },
  {
    q: "カジュアル面談では何を話しますか？選考に影響しますか？",
    a: "仕事内容や働き方について、気になることに何でもお答えする場です。選考ではありませんので、服装自由・オンライン OK・志望動機も不要です。",
  },
  {
    q: "LINE に登録すると、しつこく連絡が来ませんか？",
    a: "いいえ。ご質問への返信と日程調整のご連絡のみです。登録解除（ブロック）もいつでも可能です。",
  },
  {
    q: "応募から内定までどのくらいかかりますか？",
    a: "最短 2 週間程度です。カジュアル面談 → 面接 → 最終面接の流れで、日程は LINE で柔軟に調整できます。",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-white py-16 md:py-24">
      <div className="max-w-[900px] mx-auto px-5 md:px-10">
        <TextReveal>
          <p className="font-display font-semibold text-xs md:text-sm tracking-widest text-brand">
            [ FAQ ]
          </p>
          <h2 className="mt-3 font-display font-extrabold text-[40px] md:text-[72px] leading-[0.95] tracking-tight text-brand-deep whitespace-nowrap">
            FAQ
          </h2>
          <p className="mt-3 font-sans font-bold text-base md:text-xl tracking-wide text-ink">
            よくあるご質問
          </p>
        </TextReveal>

        <ul className="mt-10 md:mt-14 divide-y divide-black/10 border-y border-black/10">
          {items.map((it) => (
            <li key={it.q}>
              <details className="group">
                <summary
                  className="flex items-start justify-between gap-4 py-5 md:py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden min-h-[44px]"
                >
                  <span className="flex items-start gap-3 min-w-0">
                    <span className="font-display font-extrabold text-brand text-xl md:text-2xl leading-none flex-none">
                      Q.
                    </span>
                    <span className="font-sans font-bold text-base md:text-lg text-brand-deep leading-snug">
                      {it.q}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="flex-none w-8 h-8 md:w-9 md:h-9 rounded-full border border-brand/40 text-brand grid place-items-center text-sm transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="pb-6 pl-9 md:pl-10 pr-4 text-[14px] md:text-[15px] text-sub leading-[1.95]">
                  {it.a}
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
