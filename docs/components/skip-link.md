# SkipLink

キーボードで最初に届く「メインコンテンツへ」のリンクです。ふだんは隠れていて、Tab キーでフォーカスしたときだけ左上に出ます。

<ComponentPreview name="skip-link-demo" align="start">

<<< @/demos/skip-link-demo.tsx

</ComponentPreview>

プレビューの枠の中の何もないところをクリックしてから、Tab キーを押してください。

## 使い方

`<body>` の最初、[SiteHeader](./site-header) より前に置きます。移動先の `<main>` には `id` と `tabIndex={-1}` を付けます。

```tsx
import { SiteHeader, SkipLink } from '@under18dev/ui'

<SkipLink />
<SiteHeader items={items} />
<main id="main" tabIndex={-1}>
  {children}
</main>
```

`tabIndex={-1}` を付けると、リンクを押したときにフォーカスも `<main>` へ移ります。次に Tab を押すと、ヘッダーのリンクを飛ばして本文の最初のリンクへ進みます。

## Props

<PropsTable :rows="[
  ['targetId', 'string', `'main'`, '移動先の main の id'],
  ['label', 'string', `'メインコンテンツへ'`, 'リンクの文字'],
]" />

## アクセシビリティ

- すべてのページに置きます。
- 隠している間も、スクリーンリーダーからは読めます。
