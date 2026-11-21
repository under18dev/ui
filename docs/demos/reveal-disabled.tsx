import { Reveal } from '../../src'

export default function RevealDisabled() {
  return (
    // 演出せず、ふつうの div として描く
    <Reveal disabled className="u18-type-h3">
      はじめかたは、シンプル。
    </Reveal>
  )
}
