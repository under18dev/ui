import { Row, RowList } from '../../src'

export default function RowListStatement() {
  return (
    <RowList as="ol">
      <Row size="statement" index="01" title="作る。" description="アイデアを試し、動くものとして形にする。" />
      <Row size="statement" index="02" title="話す。" description="好きな技術や、自分が見ている世界を共有する。" />
      <Row size="statement" index="03" title="つながる。" description="年齢や肩書きの違いを越えて、同じ興味を持つ人と出会う。" />
    </RowList>
  )
}
