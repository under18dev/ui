# TextLink

文字のリンクです。下線を付けて、色だけに頼らずにリンクだと分かるようにします。

<ComponentPreview name="text-link-demo" align="start" :minHeight="160">

<<< @/demos/text-link-demo.tsx

</ComponentPreview>

## 使い方

```tsx
import { TextLink } from '@under18dev/ui'

<TextLink href="/about/">団体について</TextLink>
```

## 例

### 単独で置くリンク

`strong` で太字にします。空の一覧の下に置く「connpass をフォローする」や、章の見出しの右に置く「すべて見る」のように、文の外に1つだけ置くリンクに使います。

<ComponentPreview name="text-link-strong" align="start" :minHeight="160">

<<< @/demos/text-link-strong.tsx

</ComponentPreview>

### 矢印

`arrow` を付けると末尾に矢印が付き、同じサイトの中なら →、別のサイトなら ↗ になります。ホバーかフォーカスで、矢印が少しだけ動きます。`http(s)://` のリンクは自動で新しいタブで開きます。この動きを変えたいときは `external` を指定します。

<ComponentPreview name="text-link-arrow" align="start" :minHeight="200">

<<< @/demos/text-link-arrow.tsx

</ComponentPreview>

## Props

<PropsTable :rows="[
  ['href', 'string', '—', 'リンク先。必須'],
  ['children', 'ReactNode', '—', 'リンクの文字。必須'],
  ['strong', 'boolean', 'false', '太字にする'],
  ['arrow', 'boolean', 'false', '末尾に矢印を付ける'],
  ['external', 'boolean', '—', '新しいタブで開くか。省略すると http(s) のリンクだけ新しいタブ'],
]" />

そのほかの属性（`className`、`aria-*` など）と `ref` は、そのまま `<a>` に渡します。

## アクセシビリティ

- 新しいタブで開くリンクは、スクリーンリーダーに「（新しいタブで開く）」と読み上げます。
- 矢印は飾りなので読み上げません。
- 内部リンクは `LinkProvider` に渡したコンポーネント（Next.js の `Link` など）で描きます。
