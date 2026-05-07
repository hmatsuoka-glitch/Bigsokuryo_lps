# Bigsokuryo Recruit LPs

ビッグ測量株式会社 採用ランディングページ集（Next.js App Router / TypeScript / Tailwind CSS）。

ターゲット別に3パターンを用意しています。

| ルート | ターゲット | コンセプト |
| --- | --- | --- |
| [`/lp-001`](./app/lp-001) | 新卒・第二新卒 | 「地図に、自分の名前を残す。」成長・育成軸 |
| [`/lp-002`](./app/lp-002) | 中途・経験者 | 「あなたの技術が、地域の標準になる。」専門性・待遇軸 |
| [`/lp-003`](./app/lp-003) | U・Iターン希望者 | 「測量と暮らしが、ちょうどいい。」地域・ライフスタイル軸 |

## セットアップ

```bash
npm install
npm run dev
# http://localhost:3000 でインデックス
# http://localhost:3000/lp-001 など各LP
```

## ビルド

```bash
npm run build
npm run start
```

## ディレクトリ構成

```
app/
├── layout.tsx          # 共通レイアウト
├── globals.css         # Tailwind + 共通スタイル
├── page.tsx            # 3LPへのインデックス
├── lp-001/page.tsx     # 新卒向け
├── lp-002/page.tsx     # 中途向け
└── lp-003/page.tsx     # U・Iターン向け
components/
└── recruit/            # LPで共有するセクションコンポーネント
```
