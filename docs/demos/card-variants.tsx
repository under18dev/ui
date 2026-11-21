import { Card, CardGrid, Text } from '../../src'

export default function CardVariants() {
  return (
    <CardGrid as="div">
      <Card padding="md">
        <Text tone="primary">paper（標準）</Text>
      </Card>
      <Card padding="md" variant="flat">
        <Text tone="primary">flat</Text>
      </Card>
      <Card padding="md" variant="outline">
        <Text tone="primary">outline</Text>
      </Card>
    </CardGrid>
  )
}
