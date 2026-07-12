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
    browserName:'chromium',
    headless:false,
    screenshot:'on',
    trace:'on',
    }

});
