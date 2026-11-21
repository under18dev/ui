import { Accordion, TextLink } from '../../src'

export default function AccordionRich() {
  return (
    <Accordion
      items={[
        {
          summary: 'このライブラリのソースコードはどこにありますか？',
          content: (
            <p>
              GitHub の <TextLink href="https://github.com/under18dev/ui">under18dev/ui</TextLink> で公開しています。
            </p>
          ),
          defaultOpen: true,
        },
      ]}
    />
  )
}
