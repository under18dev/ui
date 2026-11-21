# Container

中身の幅を最大 1200px にして、中央に寄せる箱です。左右の余白は画面幅に合わせて 20px・32px・48px と広がります。

<ComponentPreview name="container-demo" align="full" :minHeight="160">

<<< @/demos/container-demo.tsx

</ComponentPreview>

## 使い方

```tsx
import { Container } from '@under18dev/ui'

<Container>…</Container>
```

ページの章は [Section](/components/section) で作ります。Section は中身を Container で包むので、Section の中で重ねて使う必要はありません。Container を直接使うのは、Section の外で幅だけをページに揃えたいときです。

## 例

### 要素を変える

`as` で描く要素を変えられます。既定は `<div>` です。

<ComponentPreview name="container-as" align="full" :minHeight="200">

<<< @/demos/container-as.tsx

</ComponentPreview>

## Props

<PropsTable :rows="[
  ['as', 'ElementType', `'div'`, '描く要素'],
]" />

そのほかの属性（`id`、`className`、`aria-*` など）は、そのまま描いた要素に渡します。

## アクセシビリティ

- 見た目の幅を決めるだけで、役割は持ちません。ランドマークにしたいときは `as` で `nav` や `footer` などを指定します。
- iPhone の横向きなどでは、左右の余白を安全領域（`safe-area-inset`）より狭くしません。
