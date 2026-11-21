// 文字の大きさの見本。プレビューの幅ではなく画面の幅で大きさが変わる
const styles = [
  ['display-xl', 'Display XL'],
  ['display-l', 'Display L'],
  ['h1', 'H1'],
  ['h2', 'H2'],
  ['h3', 'H3'],
  ['lead', 'Lead'],
  ['body', 'Body'],
  ['small', 'Small'],
]

export default function TokensType() {
  return (
    <div className="u18-stack">
      {styles.map(([cls, label]) => (
        <div key={cls}>
          <p className="u18-type-label u18-eyebrow">{label}</p>
          <p className={`u18-type-${cls} u18-tone-primary`}>好きなことに、年齢はいらない。</p>
        </div>
      ))}
    </div>
  )
}
