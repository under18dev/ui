import type { ElementType, HTMLAttributes, ReactNode } from 'react'
import { cx } from '../lib/cx'

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType
}

/** 最大 1200px の中央寄せの箱。左右の余白は画面幅に合わせて 20〜48px（design.md §6.1） */
export function Container({ as: Tag = 'div', className, ...rest }: ContainerProps) {
  return <Tag className={cx('u18-container', className)} {...rest} />
}

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType
  /**
   * 背景。canvas: ページと同じ、section: 一段沈んだ面、inverse: 反転（S04 などの強いメッセージだけ）
   */
  tone?: 'canvas' | 'section' | 'inverse'
  /** 上に 1px の区切り線を入れる */
  bordered?: boolean
  /** 上下の余白（72〜144px）。false で余白なし */
  spacing?: boolean
  /** 中身を Container で包む。false なら全幅 */
  contained?: boolean
  children?: ReactNode
}

/** ページの1章。背景は全幅、中身はコンテナ幅に分ける */
export function Section({
  as: Tag = 'section',
  tone = 'canvas',
  bordered = false,
  spacing = true,
  contained = true,
  className,
  children,
  ...rest
}: SectionProps) {
  const inner = contained ? (
    <div className={cx('u18-container', spacing && 'u18-section-y')}>{children}</div>
  ) : (
    children
  )
  return (
    <Tag
      className={cx(
        'u18-section',
        tone === 'inverse' && 'u18-inverse',
        !contained && spacing && 'u18-section-y',
        className,
      )}
      data-tone={tone === 'section' ? 'section' : undefined}
      data-bordered={bordered || undefined}
      {...rest}
    >
      {inner}
    </Tag>
  )
}
