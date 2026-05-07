# Bigsokuryo Recruit LPs

ビッグ測量株式会社 採用ランディングページ集。

**1リポジトリに3つの独立Next.jsアプリ**を並べた構成です。各アプリは個別にVercelへデプロイでき、それぞれのVercelプロジェクトのルートURL (`https://<project>.vercel.app/`) でLPが直接表示されます。

| サブディレクトリ | ターゲット | コンセプト |
| --- | --- | --- |
| [`bigsokuryo-lp-001/`](./bigsokuryo-lp-001) | 新卒・第二新卒 | 「地図に、自分の名前を残す。」成長・育成軸 |
| [`bigsokuryo-lp-002/`](./bigsokuryo-lp-002) | 中途・経験者 | 「あなたの技術が、地域の標準になる。」専門性・待遇軸 |
| [`bigsokuryo-lp-003/`](./bigsokuryo-lp-003) | U・Iターン希望者 | 「測量と暮らしが、ちょうどいい。」地域・ライフスタイル軸 |

## ローカル開発

各サブディレクトリに移動して個別に起動します。

```bash
cd bigsokuryo-lp-001
npm install
npm run dev
# http://localhost:3000
```

## Vercel デプロイ設定

各Vercelプロジェクトで以下を設定します。

| 項目 | 値 |
| --- | --- |
| **Framework Preset** | Next.js |
| **Root Directory** | `bigsokuryo-lp-001` / `bigsokuryo-lp-002` / `bigsokuryo-lp-003` |
| Build Command | `next build`（自動） |
| Install Command | `npm install`（自動） |
| Output Directory | `.next`（自動） |

**重要**: Root Directory を指定しないと、リポジトリ直下にNext.jsプロジェクトがないためビルド失敗または404になります。

## 技術スタック

- Next.js 14.2 (App Router)
- React 18
- TypeScript 5
- Tailwind CSS 3
