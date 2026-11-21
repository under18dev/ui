import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'
import { readdirSync } from 'node:fs'

const pages = [
  '/',
  ...readdirSync('docs/guide').map((file) => `/guide/${file.replace(/\.md$/, '')}`),
  ...readdirSync('docs/components').map((file) => `/components/${file.replace(/\.md$/, '').replace(/^index$/, '')}`),
]

for (const path of pages) {
  for (const scheme of ['light', 'dark'] as const) {
    test(`${path} ${scheme}`, async ({ page }) => {
      const errors: string[] = []
      page.on('pageerror', (error) => errors.push(error.message))
      page.on('console', (message) => message.type() === 'error' && errors.push(message.text()))
      await page.emulateMedia({ colorScheme: scheme, reducedMotion: 'reduce' })
      await page.goto(path)
      await page.waitForLoadState('networkidle')

      // プレビューがすべて描かれている
      const previews = page.locator('.u18-preview')
      const count = await previews.count()
      for (let i = 0; i < count; i++) {
        await expect(previews.nth(i)).not.toBeEmpty()
      }
      await expect(page.locator('.cp-error')).toHaveCount(0)
      await expect(page.locator('html')).toHaveAttribute('data-theme', scheme)

      // プレビューの中の a11y（VitePress 自体の UI は対象外）
      if (count > 0) {
        const results = await new AxeBuilder({ page })
          .include('.u18-preview')
          .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
          .analyze()
        const problems = results.violations.map(
          (v) => `${v.id} (${v.impact}): ${v.nodes.map((n) => n.target.join(' ')).slice(0, 3).join(', ')}`,
        )
        expect(problems).toEqual([])
      }
      expect(errors).toEqual([])
    })
  }
}
