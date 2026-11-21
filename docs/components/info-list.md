# InfoList

「項目」と「内容」の一覧です。イベントのページの開催概要（日時・会場・主催など）に使います。

<ComponentPreview name="info-list-demo" align="start" :min-height="300">

<<< @/demos/info-list-demo.tsx

</ComponentPreview>

## 使い方

```tsx
import { InfoList } from '@under18dev/ui'

<InfoList
  items={[
    { term: '会場', detail: '兵庫県三田市 私立三田学園中学校・高等学校' },
  ]}
/>
```

## 例

### リンクを含める

`detail` には文字だけでなく要素も渡せます。日時は `<time>` で、リンクは `TextLink` で書きます。

<ComponentPreview name="info-list-links" align="start" :min-height="300">

<<< @/demos/info-list-links.tsx

</ComponentPreview>

PC では項目を左に、内容を右に並べます。スマホでは項目の下に内容を置きます。

決まっていない項目は空にせず、「会場は決まり次第お知らせします」のように書くか、行ごと出さないでください。

## Props

<PropsTable :rows="[
  ['items', 'Array<{ term: ReactNode; detail: ReactNode }>', '—', '項目と内容の組（必須）'],
  ['className', 'string', '—', '追加のクラス'],
]" />

## アクセシビリティ

- `<dl>` / `<dt>` / `<dd>` で組むので、スクリーンリーダーでも項目と内容の対応が伝わります。
