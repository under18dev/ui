import { cx } from '../lib/cx'

export interface ArrowProps {
  /** next: 同じサイト内（→）、external: 別のサイト（↗）、down: ページ内の下（↓） */
  direction?: 'next' | 'external' | 'down'
  className?: string
}

const glyphs = { next: '→', external: '↗', down: '↓' } as const

/** 装飾の矢印。親に u18-arrow-host を付けると、hover で 3px だけ動く */
export function Arrow({ direction = 'next', className }: ArrowProps) {
  return (
    <span className={cx('u18-arrow', className)} data-direction={direction} aria-hidden="true">
      {glyphs[direction]}
    </span>
  )
}
