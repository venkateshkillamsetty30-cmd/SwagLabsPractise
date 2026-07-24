import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [
  ['html'],
  ['junit', { outputFile: 'results.xml' }]
],
  expect:{
     timeout:30*1000,
  },
  fullyParallel:true,

  use:{
    headless:false,
    screenshot:'on',
    trace:'on',
    },

    projects:[
      {
        name:'Desktop Chrome',
        use: { ...devices['Desktop Chrome'] },
      },
      {
        name:'Desktop Firefox',
        use: { ...devices['Desktop Firefox'] },
      },
      {
        name:'Desktop Safari',
        use: { ...devices['Desktop Safari'] },
      },
    ],

});
