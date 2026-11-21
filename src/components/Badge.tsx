import type { ReactNode } from 'react'
import { cx } from '../lib/cx'

export interface BadgeProps {
  /** outline: 標準、solid: 反転（強調）、muted: 控えめ（終了したものなど） */
  variant?: 'outline' | 'solid' | 'muted'
  className?: string
  children: ReactNode
}

/** 状態を表す小さなラベル（開催予定・終了など）。色ではなく文字で状態を伝える */
export function Badge({ variant = 'outline', className, children }: BadgeProps) {
  return (
    <span className={cx('u18-badge', className)} data-variant={variant === 'outline' ? undefined : variant}>
      {children}
    </span>
  )
}
