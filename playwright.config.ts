import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [
  ['html']
],
  expect:{
     timeout:30*1000,
  },
  fullyParallel:false,

  use:{
    headless:true,
    screenshot:'on',
    trace:'on'
  },

    projects:[
      {
        name:'chromium',
        use: { ...devices['Desktop Chrome'] }
      }
    ]

});
