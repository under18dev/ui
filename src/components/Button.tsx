import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode, type Ref } from 'react'
import { BaseLink, opensInNewTab } from '../lib/link'
import { cx } from '../lib/cx'
import { Arrow } from './Arrow'

interface CommonProps {
  /** primary: 画面で最も重要な操作（主要な視野に1つまで）、secondary: 補助の操作 */
  variant?: 'primary' | 'secondary'
  size?: 'md' | 'sm'
  /** 末尾に矢印を付ける。リンクなら → か ↗ を自動で選ぶ */
  arrow?: boolean
  fullWidth?: boolean
  className?: string
  children: ReactNode
}

export type ButtonAsLinkProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children'> & {
    href: string
    /** 新しいタブで開く。未指定なら http(s) の外部リンクだけ新しいタブ */
    external?: boolean
  }

export type ButtonAsButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    href?: undefined
  }

export type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps

/**
 * pill 形のボタン（design.md §7.2 / DECISION-004）。href を渡すとリンクとして描く。
 * 押している間だけ少し沈む。無効のときは破線にして、押せないことを形でも伝える。
 */
export const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(function Button(props, ref) {
  const { variant = 'primary', size = 'md', arrow = false, fullWidth = false, className, children, ...rest } = props
  const shared = {
    className: cx('u18-button', arrow && 'u18-arrow-host', className),
    'data-variant': variant,
    'data-size': size === 'sm' ? 'sm' : undefined,
    'data-full-width': fullWidth || undefined,
  }

  if ('href' in rest && rest.href !== undefined) {
    const { href, external, ...anchor } = rest as ButtonAsLinkProps
    return (
      <BaseLink ref={ref as Ref<HTMLAnchorElement>} href={href} external={external} {...shared} {...anchor}>
        {children}
        {arrow && <Arrow direction={opensInNewTab(href, external) ? 'external' : 'next'} />}
      </BaseLink>
    )
  }

  const { type = 'button', ...button } = rest as ButtonAsButtonProps
  return (
    <button ref={ref as Ref<HTMLButtonElement>} type={type} {...shared} {...button}>
      {children}
      {arrow && <Arrow />}
    </button>
  )
})

/** ボタンを横に並べる（狭い画面では折り返す） */
export function ButtonGroup({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cx('u18-button-group', className)}>{children}</div>
}
