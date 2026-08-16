# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> @LogintestwithCsv Login with problem_user
- Location: tests\login.spec.ts:19:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { Page, Locator , expect } from '@playwright/test';
  2  | 
  3  | export class Loginpage {
  4  | 
  5  |   page: Page;
  6  |   username: Locator;
  7  |   password: Locator;
  8  |   loginButton: Locator;
  9  |   errormsg:Locator;
  10 | 
  11 |     constructor(page:Page){
  12 |         this.page = page;
  13 |         this.username = page.getByPlaceholder('Username');
  14 |         this.password = page.getByPlaceholder('Password');
  15 |         this.loginButton = page.locator('#login-button');
  16 |         page.getByRole
  17 |         this.errormsg = page.locator('h3[data-test="error"]');
  18 |     }
  19 |     async goTO(url:string){
> 20 |         await this.page.goto(url)
     |                         ^ Error: page.goto: Target page, context or browser has been closed
  21 |     }
  22 | 
  23 |     async validlogin(username:string, password:string){
  24 |         await this.username.fill(username);
  25 |         await this.password.fill(password);
  26 |         await this.loginButton.click();
  27 | 
  28 |     }
  29 | 
  30 |     async Invalidlogin(username:string, password:string){
  31 |         await this.username.fill(username);
  32 |         await this.password.fill(password);
  33 |         await this.loginButton.click();
  34 |         await expect(this.errormsg).toContainText("Epic sadface: Username and password do not match any user in this service");
  35 |     }
  36 | 
  37 |     async verfiyPageURL(){
  38 |          await expect(this.page).toHaveURL(/inventory/);
  39 |          await expect(this.page.locator('.inventory_list')).toBeVisible();
  40 |     }
  41 | }
  42 | 
  43 | 
  44 | 
```