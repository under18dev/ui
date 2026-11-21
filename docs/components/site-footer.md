# SiteFooter

すべてのページの最後に置くフッターです。団体名と一文の説明、ページへのリンク、SNS、著作権表記を並べます。

<ComponentPreview name="site-footer-demo" align="full">

<<< @/demos/site-footer-demo.tsx

</ComponentPreview>

## 使い方

```tsx
import { SiteFooter } from '@under18dev/ui'

<SiteFooter
  tagline="作ることが好きな人が、年齢に関係なくつながって挑戦する技術コミュニティです。"
  columns={[
    {
      title: 'コミュニティ',
      links: [
        { href: '/about/', label: '団体について' },
        { href: '/events/', label: 'イベント' },
      ],
    },
  ]}
  social={[{ href: 'https://github.com/under18dev', label: 'GitHub' }]}
/>
```

## 例

### 列が1つのとき

PC では団体名の横に `columns` の数だけ列を並べます。スマホでは団体名を上に置き、リンクの列を2列で並べます。`copyright` を渡すと、下段の著作権表記を差し替えます。

<ComponentPreview name="site-footer-simple" align="full">

<<< @/demos/site-footer-simple.tsx

</ComponentPreview>

## 置いてよいもの

design.md §7.6 に沿って、次のものだけを置きます。

- 主要ページへのリンク、連絡先、プライバシーポリシーなどの運営に関する表記
- 運営が実際に使っている SNS（GitHub、YouTube、X、connpass など）

許可を得ていない SNS や協力会社のロゴは置きません。フッターの直前に [CallToAction](./call-to-action) を置くときは、フッターに強い呼びかけを重ねません。

## Props

<PropsTable :rows="[
  ['columns', 'FooterColumn[]', '—', 'リンクの列。FooterColumn は { title, links }'],
  ['social', 'FooterLink[]', '[]', '下段に並べる SNS・連絡先'],
  ['tagline', 'ReactNode', '—', '団体名の下の一文'],
  ['name', 'string', `'Under18 Developers'`, '団体名'],
  ['copyright', 'ReactNode', '—', '著作権表記。省略すると「© 今年 name」'],
]" />

`FooterLink` は `{ href, label, external? }` です。`external` を省くと、`http(s)://` のリンクだけを新しいタブで開きます。

## アクセシビリティ

- 新しいタブで開くリンクには ↗ を付け、スクリーンリーダーには「（新しいタブで開く）」と読み上げます。↗ 自体は読み上げません。
- リンクの高さは 36px 以上あります。
