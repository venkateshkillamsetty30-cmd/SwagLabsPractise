# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: plp.spec.ts >> Add Product to Cart
- Location: tests\plp.spec.ts:20:5

# Error details

```
Error: Error reading storage state from auth.json:
ENOENT: no such file or directory, open 'C:\Users\admin\SwagLabsPractise\auth.json'
```

# Test source

```ts
  1  | 
  2  | import {test,expect, BrowserContext} from '@playwright/test'
  3  | import {Loginpage} from '../PageObjects/Loginpage';
  4  | import {PLPpage} from '../PageObjects/PLPpage';
  5  | import loginData from '../testdata/loginData.json';
  6  | 
  7  | let newContext:BrowserContext;
  8  | test.beforeAll( 'asa' , async({browser})=>{
> 9  |   const context = await browser.newContext();
     |                   ^ Error: Error reading storage state from auth.json:
  10 |   const page = await context.newPage()
  11 |   const loginpage = new Loginpage(page)
  12 |   await loginpage.goTO(loginData.validUser.baseURL);
  13 |   await loginpage.validlogin(loginData.validUser.username, loginData.validUser.password);
  14 |   await loginpage.verfiyPageURL();
  15 |   await context.storageState({ path: 'auth.json' });
  16 |   newContext = await browser.newContext({storageState: 'auth.json'});
  17 | 
  18 | })
  19 | 
  20 | test('Add Product to Cart',{tag: '@fast'}, async () => {
  21 |   const page = await newContext.newPage();
  22 |   await page.goto('https://www.saucedemo.com/inventory.html');
  23 |   const plppage = new PLPpage(page);
  24 |   await plppage.AddProducttocart();
  25 | 
  26 | });
  27 | 
  28 | test('new test', async ({}) => {
  29 |   const page = await newContext.newPage();
  30 |   await page.goto('https://www.saucedemo.com/inventory.html');
  31 |   const plppage = new PLPpage(page);
  32 |   await plppage.AddProducttocart();
  33 | 
  34 | });
  35 | 
  36 | 
```