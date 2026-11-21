# Button

pill 形のボタンです。`href` を渡すとリンク（`<a>`）、渡さなければ `<button>` として描きます。

<ComponentPreview name="button-demo">

<<< @/demos/button-demo.tsx

</ComponentPreview>

## 使い方

```tsx
import { Button } from '@under18dev/ui'

<Button>参加方法を見る</Button>
```

## 例

### 種類

`primary` は画面で最も重要な操作に使います。1つの画面に1つまでです。それ以外の操作は `secondary` にします。

<ComponentPreview name="button-variants">

<<< @/demos/button-variants.tsx

</ComponentPreview>

### リンク

`href` を渡すとリンクになります。`arrow` を付けると末尾に矢印が付き、同じサイトの中なら →、別のサイトなら ↗ になります。`http(s)://` のリンクは自動で新しいタブで開き、スクリーンリーダーには「（新しいタブで開く）」と読み上げます。

<ComponentPreview name="button-link">

<<< @/demos/button-link.tsx

</ComponentPreview>

### 大きさ

ヘッダーのように場所が限られるところでは `size="sm"` を使います。どちらもタップできる範囲は 44px 以上あります。

<ComponentPreview name="button-sizes">

<<< @/demos/button-sizes.tsx

</ComponentPreview>

### 無効

押せないボタンは破線にして、色だけでなく形でも押せないことを伝えます。

<ComponentPreview name="button-disabled">

<<< @/demos/button-disabled.tsx

</ComponentPreview>

## Props

<PropsTable :rows="[
  ['variant', `'primary' | 'secondary'`, `'primary'`, '見た目の種類'],
  ['size', `'md' | 'sm'`, `'md'`, '高さ。md は 48px、sm は 44px'],
  ['href', 'string', '—', '指定するとリンクとして描く'],
  ['external', 'boolean', '—', '新しいタブで開くか。省略すると http(s) のリンクだけ新しいタブ'],
  ['arrow', 'boolean', 'false', '末尾に矢印を付ける'],
  ['fullWidth', 'boolean', 'false', '横幅いっぱいに広げる'],
]" />

そのほかの属性（`onClick`、`type`、`disabled`、`aria-*` など）は、そのまま `<button>` か `<a>` に渡します。

### ButtonGroup

ボタンを横に並べ、狭い画面では折り返します。間隔は 12px です。

## アクセシビリティ

- フォーカスしたときは 2px の枠線を、2px 離して表示します。
- 押している間だけ少し縮みます。動きを減らす設定では、すぐに切り替わります。
- 内部リンクは `LinkProvider` に渡したコンポーネント（Next.js の `Link` など）で描きます。
