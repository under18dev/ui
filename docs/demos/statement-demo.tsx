import { Statement } from '../../src'

export default function StatementDemo() {
  return (
    <Statement
      id="statement-demo"
      tight
      kicker="そんなあなたのための場所。"
      title={
        <>
          Under18
          <br />
          Developers.
        </>
      }
      body="作ることが好きな人が、つながって、挑戦する。年齢に関係なく、知らない世界に踏み出せるコミュニティ。"
    />
  )
}
