import type { ReactNode } from 'react'

/** 画面には出さず、スクリーンリーダーにだけ読ませる */
export function VisuallyHidden({ children }: { children: ReactNode }) {
  return <span className="u18-sr-only">{children}</span>
}
