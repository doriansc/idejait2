import { defineConfig, devices } from '@playwright/test';

// QA testovi nad izgrađenom stranicom (dist/). Pokretanje: npm run build && npm test
export default defineConfig({
  testDir: 'tests',
  testMatch: '**/*.spec.ts',
  fullyParallel: true,
  reporter: [['list']],
  use: { baseURL: 'http://localhost:4321' },
  webServer: {
    command: 'python3 -m http.server 4321 -d dist',
    url: 'http://localhost:4321/',
    reuseExistingServer: true,
    timeout: 60_000,
    stdout: 'ignore',
    stderr: 'ignore',
  },
  projects: [
    { name: 'mobile', use: { ...devices['Pixel 7'], viewport: { width: 390, height: 844 } } },
    { name: 'desktop', use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 } } },
  ],
});
