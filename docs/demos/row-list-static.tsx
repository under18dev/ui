import { Row, RowList } from '../../src'

export default function RowListStatic() {
  return (
    <RowList>
      <Row title="Web サイト" meta="under18.dev" />
      <Row title="イベントの告知" meta="under18dev.connpass.com" />
      <Row title="ソースコード" meta="github.com/under18dev" />
    </RowList>
  )
}
