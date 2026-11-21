# Reveal

画面に入ったときに一度だけ、下から少し浮かせて表示します。問いかけや原則の一覧のように、文を読む順に見せたいところで使います。

<ComponentPreview name="reveal-demo" align="full">

<<< @/demos/reveal-demo.tsx

</ComponentPreview>

## 使い方

```tsx
import { Reveal } from '@under18dev/ui'

<Reveal as="p" className="u18-type-lead">
  でも、何かを始めようとすると、こんな言葉に出会う。
</Reveal>
```

Split・Statement・CallToAction は中で Reveal を使っているので、包み直す必要はありません。

## 動かすための条件

Reveal が要素を隠して演出するのは、`<html>` に `data-motion` が付いているときだけです。`data-motion` は [ThemeScript](/guide/theming) が、動きを減らす設定でないときに付けます。ThemeScript を置いていないページや、動きを減らす設定のときは、最初から表示したままになります。

```tsx
<head>
  <ThemeScript />
</head>
```

ほかにも、次のときは隠しません。

- JS が動かないとき。要素を隠す CSS は、JS が動いて `<html>` に `data-reveal-ready` が付いてから効きます。
- 最初に描いた時点で画面の中にある要素。隠してから出し直すとちらつくためです。

一度表示した要素は、上に戻ってスクロールし直しても隠しません。

## 例

### 要素を変える

`as` で描く要素を変えます。標準は `<div>` です。`className` や `style` などの属性はそのまま渡ります。

<ComponentPreview name="reveal-as" align="start">

<<< @/demos/reveal-as.tsx

</ComponentPreview>

### 順番にずらす

`index` に同じまとまりの中での順番を渡すと、100ms ずつ遅らせて表示します。ずらすのは3つ（0〜2）までにします。

### 演出しない

`disabled` を付けると、ふつうの要素として描きます。一覧の件数が多いときなど、演出が読む邪魔になるところで使います。

<ComponentPreview name="reveal-disabled" align="start">

<<< @/demos/reveal-disabled.tsx

</ComponentPreview>

## Props

<PropsTable :rows="[
  ['as', 'ElementType', `'div'`, '描く要素'],
  ['index', 'number', '0', '同じまとまりの中での順番（0〜2）。100ms ずつ遅らせる'],
  ['disabled', 'boolean', 'false', '演出しない'],
]" />

そのほかの属性（`className`、`style`、`id`、`aria-*`、`data-*` など）は、そのまま描く要素に渡します。

## アクセシビリティ

- 動かすのは `opacity` と `transform` だけです。表示の途中でもクリック、Tab での移動、文字の選択ができます。
- 画面に入ったかの判定には、ページで1つの IntersectionObserver を使います。
