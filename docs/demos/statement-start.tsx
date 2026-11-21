import { Button, Statement } from '../../src'

export default function StatementStart() {
  return (
    <Statement
      id="statement-demo-start"
      inverse={false}
      align="start"
      title={
        <>
          だったら、
          <br />
          始めよう。
        </>
      }
      body="作ることが好きな人が、つながって、挑戦する。年齢に関係なく、知らない世界に踏み出せるコミュニティ。"
      actions={
        <Button href="https://under18.dev/about/" variant="secondary" arrow>
          団体について
        </Button>
      }
    />
  )
}
