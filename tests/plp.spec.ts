
import {test,expect, BrowserContext} from '@playwright/test'
import {Loginpage} from '../PageObjects/Loginpage';
import {PLPpage} from '../PageObjects/PLPpage';
import loginData from '../testdata/loginData.json';

test.beforeAll( 'asa' , async({browser})=>{
  const context = await browser.newContext();
  const page = await context.newPage()
  const loginpage = new Loginpage(page)
  await loginpage.goTO(loginData.validUser.baseURL);
  await loginpage.validlogin(loginData.validUser.username, loginData.validUser.password);
  await loginpage.verfiyPageURL();
  await context.storageState({ path: 'auth.json' });

})

test('Add Product to Cart',{tag: '@fast'}, async ({browser}) => {
  
  const context = await browser.newContext({
        storageState: 'auth.json'});
  const page = await context.newPage();
  await page.goto('https://www.saucedemo.com/inventory.html');
  const plppage = new PLPpage(page);
  await plppage.AddProducttocart();

});

test('new test', async ({browser}) => {
   const context = await browser.newContext({
        storageState: 'auth.json'});
  const page = await context.newPage();
  await page.goto('https://www.saucedemo.com/inventory.html');
  const plppage = new PLPpage(page);
  await plppage.AddProducttocart();

});

