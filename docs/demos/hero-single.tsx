import { Button, Hero, Muted } from '../../src'

export default function HeroSingle() {
  return (
    <Hero
      title={
        <>
          好きなことに、
          <br />
          年齢は<Muted>いらない。</Muted>
        </>
      }
      actions={<Button href="https://under18.dev/join/">参加方法を見る</Button>}
    />
  )
}
