import { themeScriptSource } from './theme'

export interface ThemeScriptProps {
  /** トップのヒーローの登場演出を、セッションの最初の1回だけ再生する */
  heroMotion?: boolean
  nonce?: string
}

/**
 * テーマを最初の描画より前に確定するスクリプト。
 * <head> の中、CSS より前に置く。動きを減らす設定でなければ html に data-motion も付ける。
 */
export function ThemeScript({ heroMotion = false, nonce }: ThemeScriptProps) {
  return <script nonce={nonce} dangerouslySetInnerHTML={{ __html: themeScriptSource({ heroMotion }) }} />
}
