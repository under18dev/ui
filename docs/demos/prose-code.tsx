import { Prose } from '../../src'

export default function ProseCode() {
  return (
    <Prose>
      <p>
        このライブラリは npm からインストールできます。
      </p>
      <pre>
        <code>bun add @under18dev/ui</code>
      </pre>
      <blockquote>
        <p>好きなことに、年齢はいらない。</p>
      </blockquote>
    </Prose>
  )
}
