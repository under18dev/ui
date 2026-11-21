import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from 'react'
import { cx } from '../lib/cx'

export type HeadingSize = 'display-xl' | 'display-l' | 'h1' | 'h2' | 'h3' | 'h4'
type Tone = 'primary' | 'secondary' | 'muted'

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /** 見出しの階層（h1〜h4）。見た目の大きさは size で別に決める */
  level: 1 | 2 | 3 | 4
  /** 文字の大きさ。未指定なら level と同じ */
  size?: HeadingSize
  tone?: Tone
  /** 大きな英字の見出しだけ字間を詰める（-0.025em）。日本語には使わない */
  tight?: boolean
}

/** 見出し。階層（level）と見た目（size）を分けて、装飾のために階層を飛ばさないようにする */
export function Heading({ level, size, tone = 'primary', tight, className, ...rest }: HeadingProps) {
  const Tag = `h${level}` as const
  const resolved = size ?? (`h${level}` as HeadingSize)
  return <Tag className={cx(`u18-type-${resolved}`, `u18-tone-${tone}`, tight && 'u18-tight', className)} {...rest} />
}

export interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType
  variant?: 'lead' | 'body' | 'small'
  tone?: Tone
  /** 本文の可読幅（42em）に収める */
  measure?: boolean
  style?: CSSProperties
  children?: ReactNode
}

/** 本文。lead はリード文、body は本文、small は補足 */
export function Text({
  as: Tag = 'p',
  variant = 'body',
  tone = 'secondary',
  measure = false,
  className,
  ...rest
}: TextProps) {
  return <Tag className={cx(`u18-type-${variant}`, `u18-tone-${tone}`, measure && 'u18-measure', className)} {...rest} />
}

export interface EyebrowProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
}

/** 見出しの上の英字の小さなラベル（Activities など）。日本語には使わない */
export function Eyebrow({ className, ...rest }: EyebrowProps) {
  return <p className={cx('u18-type-label u18-eyebrow', className)} {...rest} />
}
