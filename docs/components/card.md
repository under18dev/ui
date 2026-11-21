# Card

紙のように少し浮いたカードです。全体がリンクの `LinkCard` と、並べるための `CardGrid` もこのページで扱います。

<ComponentPreview name="card-demo" align="start" :min-height="520">

<<< @/demos/card-demo.tsx

</ComponentPreview>

## Card と RowList の使い分け

カードは、イベントや投稿のように1件ずつ別の実データを並べるときだけ使います。

- 画像や日付があり、1件ごとにまとまりを見せたい → `CardGrid` と `LinkCard`
- タイトルと短い説明だけで読める → [RowList](./row-list)

迷ったら RowList にします。参加方法の案内や原則の一覧など、データではない内容をカードで囲まないでください。

## 使い方

```tsx
import { CardGrid, LinkCard } from '@under18dev/ui'

<CardGrid>
  <LinkCard
    as="li"
    href="https://under18.dev/events/unknown-world-2026/"
    title="知らない世界の話をしよう 2026"
  />
</CardGrid>
```

`CardGrid` は標準で `<ul>` になるので、中の `LinkCard` には `as="li"` を渡します。

## 例

### 列の数

`CardGrid` はスマホで1列、タブレットで2列、PC で `columns` 列に並びます。件数が2件なら `columns={2}` にして、空いた列を作らないようにします。

<ComponentPreview name="card-columns" align="start" :min-height="400">

<<< @/demos/card-columns.tsx

</ComponentPreview>

### 面の種類

`Card` は中身を自分で組むときに使います。`padding` を指定しないと余白は 0 です。

<ComponentPreview name="card-variants" align="start" :min-height="200">

<<< @/demos/card-variants.tsx

</ComponentPreview>

## Props

### Card

<PropsTable :rows="[
  ['as', `'article' | 'div' | 'li' | 'section'`, `'article'`, '描く要素'],
  ['variant', `'paper' | 'flat' | 'outline'`, `'paper'`, 'paper は影あり、flat は一段沈んだ面、outline は線だけ'],
  ['padding', `'none' | 'md' | 'lg'`, `'none'`, '中の余白。md は 24px、lg は 32px（PC は 48px）'],
]" />

そのほかの属性（`aria-*`、`id` など）は、そのまま要素に渡します。

### LinkCard

<PropsTable :rows="[
  ['href', 'string', '—', 'リンク先（必須）'],
  ['title', 'ReactNode', '—', 'タイトル（必須）'],
  ['external', 'boolean', '—', '新しいタブで開くか。省略すると http(s) のリンクだけ新しいタブ'],
  ['headingLevel', '2 | 3 | 4', '3', 'タイトルの見出しの階層'],
  ['description', 'ReactNode', '—', '説明'],
  ['meta', 'ReactNode', '—', '日付や Badge など、タイトルの上に出す情報'],
  ['image', '{ src, alt, width?, height? }', '—', '上に出す画像。比率は 1200:630'],
  ['actionLabel', 'string', '—', 'カード下部の文言。省略すると出さない'],
  ['as', `'article' | 'li' | 'div'`, `'article'`, '描く要素'],
  ['className', 'string', '—', '追加のクラス'],
]" />

### CardGrid

<PropsTable :rows="[
  ['columns', '2 | 3', '3', 'PC での列の数'],
  ['as', `'ul' | 'div'`, `'ul'`, '描く要素'],
  ['className', 'string', '—', '追加のクラス'],
]" />

## アクセシビリティ

- `LinkCard` はタイトルのリンクをカード全体に広げています。リンクは1つだけなので、読み上げではタイトルがリンク名になります。
- そのため `LinkCard` の中に別のリンクやボタンを入れないでください。
- `actionLabel` は見た目だけの文言で、読み上げません。
- 画像の `alt` には内容を書きます。飾りなら空文字にします。
