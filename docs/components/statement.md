# Statement

問いかけから団体の紹介へ切り替える、大きな文字の章です。ページの中で最も目立つ文字なので、1ページに1か所だけ使います。

<ComponentPreview name="statement-demo" align="full">

<<< @/demos/statement-demo.tsx

</ComponentPreview>

## 使い方

```tsx
import { Statement } from '@under18dev/ui'

<Statement
  id="reveal"
  tight
  kicker="そんなあなたのための場所。"
  title={<>Under18<br />Developers.</>}
  body="作ることが好きな人が、つながって、挑戦する。"
/>
```

## 例

### 反転しない・左寄せ

標準では背景を反転し、中央に揃えます。`inverse={false}` で反転をやめ、`align="start"` で左に寄せます。`actions` にボタンを渡すと本文の下に並べます。

<ComponentPreview name="statement-start" align="full">

<<< @/demos/statement-start.tsx

</ComponentPreview>

### 英字の見出し

`tight` を付けると見出しの字間を詰めます。「Under18 Developers.」のような英字の見出しに使います。日本語の見出しには付けません。

## 表示の動き

前置き、見出し、本文の順に [Reveal](./reveal) で一度だけ表示します。反転した背景は、ライトとダークのどちらでも同じ強さの明暗差になります。

## Props

<PropsTable :rows="[
  ['title', 'ReactNode', '—', '大きな文字（h2）'],
  ['kicker', 'ReactNode', '—', '大きな文字の前の一文'],
  ['body', 'ReactNode', '—', '大きな文字の下の文'],
  ['actions', 'ReactNode', '—', '本文の下に並べる Button'],
  ['inverse', 'boolean', 'true', '背景を反転する'],
  ['align', `'center' | 'start'`, `'center'`, '文字の揃え'],
  ['tight', 'boolean', 'false', '見出しの字間を詰める'],
  ['id', 'string', '—', 'section の id。見出しに id-heading を付け、aria-labelledby で結ぶ'],
]" />

## アクセシビリティ

- 見出しは `<h2>` です。前置きの `kicker` は見出しに含めません。
- 高さは画面の 80% 以上ありますが、スクロールを止めたり固定したりはしません。
