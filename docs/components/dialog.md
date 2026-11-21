# Dialog

画面の手前に重ねて出すモーダルです。PC では中央のカード、スマホでは下から出るシートになります。

<ComponentPreview name="dialog-demo" :min-height="200">

<<< @/demos/dialog-demo.tsx

</ComponentPreview>

## 使い方

開閉の状態は呼び出す側で持ちます。

```tsx
import { useState } from 'react'
import { Button, Dialog } from '@under18dev/ui'

const [open, setOpen] = useState(false)

<Button onClick={() => setOpen(true)}>開く</Button>
<Dialog open={open} onClose={() => setOpen(false)} title="タイトル">
  本文
</Dialog>
```

Escape、背景のクリック、右上の × で `onClose` が呼ばれます。`open` を `false` にするまでは閉じません。

## 例

### 中に操作を置く

本文には `Button` などを置けます。ここで出す操作は Dialog を閉じる処理も行うようにします。

<ComponentPreview name="dialog-actions" :min-height="200">

<<< @/demos/dialog-actions.tsx

</ComponentPreview>

## Props

<PropsTable :rows="[
  ['open', 'boolean', '—', '開いているか（必須）'],
  ['onClose', '() => void', '—', '閉じる操作をしたとき（必須）'],
  ['title', 'ReactNode', '—', 'タイトル（必須）'],
  ['children', 'ReactNode', '—', '本文（必須）'],
  ['closeLabel', 'string', `'閉じる'`, '× ボタンの読み上げ名'],
]" />

## アクセシビリティ

- ネイティブの `<dialog>` を `showModal()` で開きます。開いている間、後ろのページは操作できず、スクロールもしません。
- 開いている間、Dialog の外の要素にはフォーカスが移りません。
- Escape で閉じます。閉じると、開く前にフォーカスしていた要素（開いたボタンなど）にフォーカスが戻ります。
- タイトルは `<h2>` で、Dialog の名前として読み上げます。
- 動きを減らす設定では、アニメーションせずに開きます。
