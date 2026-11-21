# Hero

トップページの最初の画面（S01）です。大きな左寄せの見出しを主役に、説明文とボタンを続けます。

<ComponentPreview name="hero-demo" align="full">

<<< @/demos/hero-demo.tsx

</ComponentPreview>

## 使い方

```tsx
import { Button, Hero, Muted } from '@under18dev/ui'

<Hero
  eyebrow="Under18 Developers"
  title={<>好きなことに、<br />年齢は<Muted>いらない。</Muted></>}
  lead="作ることが好きな人が、年齢に関係なくつながって挑戦する技術コミュニティです。"
  actions={<Button href="#activities">活動を見る</Button>}
  scrollTargetId="questions"
/>
```

## 例

### ボタンを1つにする

ボタンは1〜2個にします（design.md §8.1）。2個のときは2つ目を `variant="secondary"` にします。Hero で複数の活動を紹介しません。

<ComponentPreview name="hero-single" align="full">

<<< @/demos/hero-single.tsx

</ComponentPreview>

### 見出しの一部を薄くする

`Muted` で囲んだ部分は `text-muted` の色になります。見出しの中で、読ませたい言葉と流す言葉に差を付けるときに使います。

### スクロール案内

`scrollTargetId` に次の章の `id` を渡すと、下端に「下へスクロール」と細い線を出します。押すとその章へ移動します。移動先には `tabIndex={-1}` を付けておくと、フォーカスも移ります。省くと案内を出しません。

## 高さと登場の演出

高さは、画面の高さの 80%（スマホ）・85%（タブレット）・100%（PC）からヘッダーの高さを引いた分です。プレビューでは中をスクロールして続きを見てください。

`ThemeScript` に `heroMotion` を付けると、見出し・説明・ボタンの順に 120ms ずつずらして表示します。再生するのはセッションの最初の1回だけで、動きを減らす設定では再生しません。このページのプレビューでは再生しません。

```tsx
<ThemeScript heroMotion />
```

## Props

<PropsTable :rows="[
  ['title', 'ReactNode', '—', '見出し（h1）。2〜3行に収める'],
  ['eyebrow', 'string', '—', '見出しの上の小さな英字'],
  ['lead', 'ReactNode', '—', '説明文。1〜2文'],
  ['actions', 'ReactNode', '—', 'Button を1〜2個'],
  ['scrollTargetId', 'string', '—', 'スクロール案内の移動先の id'],
  ['scrollLabel', 'string', `'下へスクロール'`, 'スクロール案内の文字'],
  ['id', 'string', '—', 'section の id'],
]" />

## アクセシビリティ

- 見出しは `<h1>` です。Hero を置くページでは、ほかに `<h1>` を置きません。
- スクロール案内の線は装飾なので読み上げません。動きを減らす設定では線も止まります。
