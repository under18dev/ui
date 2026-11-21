import { defineConfig, devices } from '@playwright/test'

// ドキュメントサイト（VitePress）の検査
export default defineConfig({
  testDir: 'tests',
  testMatch: 'docs.spec.ts',
  fullyParallel: true,
  reporter: 'list',
  use: { baseURL: 'http://localhost:4320/' },
  webServer: {
    command: 'npx vitepress build docs && npx vitepress preview docs --port 4320',
    url: 'http://localhost:4320/',
    reuseExistingServer: true,
  },
  projects: [{ name: 'chrome', use: { ...devices['Desktop Chrome'], channel: 'chrome' } }],
})
