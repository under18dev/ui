# デザイントークン

色・余白・文字・動きの値は、すべて CSS 変数です。`tokens.css` に定義してあり、コンポーネントの CSS もこの変数だけを使っています。自分で CSS を書くときも、生のカラーコードは書かずに変数を使ってください。

## 色

無彩色だけです。ライトとダークで値が入れ替わります。右上のテーマを切り替えると、見本の色も変わります。

<ComponentPreview name="tokens-colors" align="start">

<<< @/demos/tokens-colors.tsx

</ComponentPreview>

| 変数 | ライト | ダーク |
|---|---|---|
| `--color-canvas` | `#FAFAFA` | `#101010` |
| `--color-section` | `#F1F1F1` | `#191919` |
| `--color-surface` | `#FFFFFF` | `#202020` |
| `--color-surface-raised` | `#F6F6F6` | `#292929` |
| `--color-text` | `#202020` | `#F1F1F1` |
| `--color-text-secondary` | `#555555` | `#C0C0C0` |
| `--color-text-muted` | `#666666` | `#A3A3A3` |
| `--color-border` | `#D6D6D6` | `#444444` |
| `--color-border-strong` | `#777777` | `#969696` |
| `--color-inverse-bg` | `#202020` | `#F1F1F1` |
| `--color-inverse-text` | `#FFFFFF` | `#101010` |
| `--color-focus` | `#202020` | `#F1F1F1` |

`--color-text-muted` も、背景に対して WCAG AA（4.5:1）を満たします。

## 文字

`u18-type-*` のクラスで当てます。画面の幅が 768px と 1024px を超えたところで、大きくなります。

<ComponentPreview name="tokens-type" align="start">

<<< @/demos/tokens-type.tsx

</ComponentPreview>

| クラス | スマホ | タブレット | PC | 太さ | 行の高さ |
|---|---:|---:|---:|---:|---:|
| `u18-type-display-xl` | 48px | 84px | 112px | 700 | 1.08 |
| `u18-type-display-l` | 40px | 64px | 80px | 700 | 1.12 |
| `u18-type-h1` | 36px | 52px | 64px | 700 | 1.20 |
| `u18-type-h2` | 30px | 40px | 48px | 700 | 1.28 |
| `u18-type-h3` | 24px | 28px | 30px | 600 | 1.35 |
| `u18-type-lead` | 18px | 20px | 22px | 400 | 1.85 |
| `u18-type-body` | 16px | 16px | 16px | 400 | 1.85 |
| `u18-type-small` | 14px | 14px | 14px | 400 | 1.65 |
| `u18-type-label` | 12px | 12px | 12px | 600 | 1.45 |

`u18-type-label` は英字の小さなラベル用です。字間を広げて大文字にするので、日本語には使いません。

## 余白とレイアウト

余白は 4px の倍数です。ページの左右の余白・章の上下の余白・ヘッダーの高さは、画面の幅に合わせて変わります。

| 変数 | スマホ | タブレット（768px〜） | ノート PC（1024px〜） | PC（1280px〜） |
|---|---:|---:|---:|---:|
| `--page-gutter` | 20px | 32px | 48px | 48px |
| `--section-y` | 72px | 96px | 120px | 144px |
| `--header-height` | 64px | 72px | 76px | 80px |

コンテナの最大幅は `--container-max`（1200px）です。

| 変数 | 値 | 使う場所 |
|---|---|---|
| `--radius-sm` | 4px | インラインのコード |
| `--radius-md` | 8px | メニュー・画像 |
| `--radius-paper` | 11px | カード（DECISION-004） |
| `--radius-pill` | 9999px | ボタン・ラベル・タブ |

## 動き

| 変数 | 値 | 使う場所 |
|---|---|---|
| `--duration-fast` | 140ms | ボタンの状態の変化 |
| `--duration-normal` | 240ms | hover・テーマの切り替え |
| `--duration-entry` | 600ms | スクロールで表示する演出 |
| `--duration-hero` | 700ms | ヒーローの登場 |
| `--ease-standard` | `cubic-bezier(.2, .7, .2, 1)` | 全般 |
| `--ease-out` | `cubic-bezier(.16, 1, .3, 1)` | 登場 |
| `--entry-offset` | 12px（768px〜 16px） | 表示するときに動く距離 |
| `--stagger` | 100ms | 並んだ要素を順に出す間隔 |

動きを減らす設定では、すべてのアニメーションと切り替えを止めます。

## ユーティリティ

組み立てに使う小さなクラスもあります。

| クラス | 内容 |
|---|---|
| `u18-container` | 最大 1200px の中央寄せ |
| `u18-section-y` | 章の上下の余白 |
| `u18-measure` | 本文の幅（42em）に収める |
| `u18-stack` | 縦に 24px 間隔で積む |
| `u18-cluster` | 横に並べて折り返す |
| `u18-mt-4`〜`u18-mt-24` | 上の余白（16〜96px） |
| `u18-tone-primary` / `secondary` / `muted` | 文字の色 |
| `u18-sr-only` | スクリーンリーダーにだけ読ませる |
