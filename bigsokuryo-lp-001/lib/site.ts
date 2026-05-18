// 会社の基本情報。すべてのコンポーネントから参照する単一の情報源。
export const COMPANY = {
  name: "ビッグ測量設計株式会社",
  nameEn: "Big Survey & Design CO.,LTD",
  founded: "1980年10月29日",
  capital: "1,000万円",
  representative: "村田 優紀",
  employees: "179名",
  registration: "国土交通大臣登録 一般 第（９）-１４８５８号",
  address: "〒110-0015 東京都台東区東上野1丁目26番8号",
  tel: "03-3837-0291",
  fax: "03-3837-5694",
  hours: "8:00〜17:00（土日祝定休）",
  access: [
    "JR「御徒町」駅 徒歩4分",
    "つくばエクスプレス「新御徒町」駅 徒歩1分",
    "各線「上野」駅 徒歩10分",
  ],
  recruitContact: {
    department: "人事部",
    name: "須藤 翠",
    email: "saiyou@bigsdc.co.jp",
  },
};

export const SITE = {
  // 公式LINE（実値が決まったら差し替えてください）
  lineUrl: "https://lin.ee/REPLACE_ME",
  lineId: "@bigsokuryo",
  // フォーム送信API。空ならコンソールログで挙動確認のみ。
  entryEndpoint: "",
};
