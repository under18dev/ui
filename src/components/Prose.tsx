import type { HTMLAttributes } from 'react'
import { cx } from '../lib/cx'

/**
 * Markdown などから作った本文の見た目を整える。見出し・リスト・表・コードを、トークンの色で描く。
 * 中身の HTML は信頼できるもの（自分たちで書いた Markdown の変換結果など）だけにする。
 */
export function Prose({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx('u18-prose', className)} {...rest} />
}
