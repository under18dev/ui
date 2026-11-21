import AxeBuilder from '@axe-core/playwright'
import { expect, test, type Page } from '@playwright/test'

const pages = ['#/', '#/events', '#/components']

async function open(page: Page, hash: string) {
  await page.goto(`/${hash}`)
  await page.locator('main').waitFor()
}

// THEME-01〜06（design.md §15.2）
test.describe('テーマ', () => {
  test('初回は OS の設定に従い、選択は system', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' })
    await open(page, '#/')
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
    await expect(page.locator('html')).toHaveAttribute('data-theme-preference', 'system')
    await page.emulateMedia({ colorScheme: 'light' })
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
  })

  test('ライトを選ぶと OS がダークでもライトで、再読み込み後も保持する', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' })
    await open(page, '#/')
    const button = page.getByRole('button', { name: /テーマ/ })
    await button.click()
    await page.getByRole('menuitemradio', { name: 'ライト' }).click()
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
    await expect(button).toBeFocused()
    await page.reload()
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
    await button.click()
    await expect(page.getByRole('menuitemradio', { name: 'ライト' })).toHaveAttribute('aria-checked', 'true')
  })

  test('保存値が不正なら system に戻り、エラーを出さない', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))
    await page.addInitScript(() => localStorage.setItem('u18.theme', 'purple'))
    await open(page, '#/')
    await expect(page.locator('html')).toHaveAttribute('data-theme-preference', 'system')
    expect(errors).toEqual([])
  })

  test('メニューは矢印キーで移動し、Escape で閉じてボタンに戻る', async ({ page }) => {
    await open(page, '#/')
    const button = page.getByRole('button', { name: /テーマ/ })
    await button.focus()
    await page.keyboard.press('Enter')
    await expect(page.getByRole('menuitemradio', { name: 'システム設定に合わせる' })).toBeFocused()
    await page.keyboard.press('ArrowDown')
    await expect(page.getByRole('menuitemradio', { name: 'ライト' })).toBeFocused()
    await page.keyboard.press('Escape')
    await expect(page.getByRole('menu')).toBeHidden()
    await expect(button).toBeFocused()
  })
})

test.describe('スマホのメニュー', () => {
  test.use({ viewport: { width: 375, height: 812 } })

  test('開くとメニューにフォーカスし、Escape で閉じてボタンに戻る', async ({ page }) => {
    await open(page, '#/')
    const button = page.locator('button[aria-controls][aria-expanded]').last()
    await expect(button).toHaveAccessibleName('メニュー')
    await button.click()
    await expect(button).toHaveAttribute('aria-expanded', 'true')
    await expect(button).toHaveAccessibleName('閉じる')
    await expect(page.getByRole('navigation', { name: 'メニュー' }).getByRole('link').first()).toBeFocused()
    await page.keyboard.press('Escape')
    await expect(page.getByRole('navigation', { name: 'メニュー' })).toBeHidden()
    await expect(button).toBeFocused()
    await expect(button).toHaveAccessibleName('メニュー')
  })
})

test('タブは矢印キーで切り替わる', async ({ page }) => {
  await open(page, '#/events')
  const tabs = page.getByRole('tab')
  await tabs.first().focus()
  await page.keyboard.press('ArrowRight')
  await expect(tabs.nth(1)).toBeFocused()
  await expect(tabs.nth(1)).toHaveAttribute('aria-selected', 'true')
  await expect(page.getByRole('tabpanel')).toContainText('知らない世界の話をしよう')
})

test('ダイアログは Escape で閉じ、開いたボタンにフォーカスが戻る', async ({ page }) => {
  await open(page, '#/components')
  // Safari はクリックでボタンにフォーカスしないので、キーボードで開く
  const button = page.getByRole('button', { name: 'ダイアログを開く' })
  await button.focus()
  await page.keyboard.press('Enter')
  await expect(page.getByRole('dialog', { name: 'ダイアログ' })).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog')).toBeHidden()
  await expect(button).toBeFocused()
})

test('スキップリンクが最初のフォーカス先', async ({ page, browserName }) => {
  test.skip(browserName === 'webkit', 'Safari は Tab でリンクに移動しない設定が既定')
  await open(page, '#/')
  await page.keyboard.press('Tab')
  await expect(page.getByRole('link', { name: 'メインコンテンツへ' })).toBeFocused()
})

test('スクロールで表示する要素は、最後まで見たらすべて表示されている', async ({ page }) => {
  await open(page, '#/')
  for (let y = 0; y < 12000; y += 400) {
    await page.mouse.wheel(0, 400)
    await page.waitForTimeout(30)
  }
  await page.waitForTimeout(800)
  const hidden = await page.locator('[data-reveal]:not([data-revealed])').count()
  expect(hidden).toBe(0)
})

test('動きを減らす設定では、何も隠さない', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await open(page, '#/')
  await expect(page.locator('html')).not.toHaveAttribute('data-motion', /.*/)
  for (const element of await page.locator('[data-reveal]').all()) {
    await expect(element).toHaveCSS('opacity', '1')
  }
})

// VIEW-01・A11Y-01
for (const width of [320, 1280]) {
  for (const scheme of ['light', 'dark'] as const) {
    for (const hash of pages) {
      test(`axe と横スクロール ${hash} ${width}px ${scheme}`, async ({ page }) => {
        await page.setViewportSize({ width, height: 800 })
        await page.emulateMedia({ colorScheme: scheme, reducedMotion: 'reduce' })
        await open(page, hash)
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
        expect(overflow).toBeLessThanOrEqual(0)
        const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice']).analyze()
        const problems = results.violations.map((v) => `${v.id} (${v.impact}): ${v.nodes.map((n) => n.target.join(' ')).slice(0, 3).join(', ')}`)
        expect(problems).toEqual([])
      })
    }
  }
}
