import { Reveal } from '../../src'

export default function RevealAs() {
  return (
    <div>
      <Reveal as="p" className="u18-type-lead u18-tone-secondary">
        でも、何かを始めようとすると、こんな言葉に出会う。
      </Reveal>
      <Reveal as="p" index={1} className="u18-type-h2" style={{ marginTop: 40, maxWidth: '18em' }}>
        作ってみたい。人に会いたい。何かを変えたい。
      </Reveal>
    </div>
  )
}
