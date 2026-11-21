import { Prose } from '../../src'

export default function ProseCode() {
  return (
    <Prose>
      <p>
        このライブラリは npm に公開していません。<code>bun add</code> で GitHub のリポジトリから入れます。
      </p>
      <pre>
        <code>bun add github:under18dev/ui</code>
      </pre>
      <blockquote>
        <p>好きなことに、年齢はいらない。</p>
      </blockquote>
    </Prose>
  )
}
