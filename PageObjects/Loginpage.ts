import { Page, Locator , expect , context} from '@playwright/test';

export class Loginpage {

  page: Page;
   username: Locator;
   password: Locator;
   loginButton: Locator;
   errormsg:Locator;

    constructor(page:Page){
        this.page = page;
        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.loginButton = page.locator('#login-button');
        page.getByRole
        this.errormsg = page.locator('h3[data-test="error"]');
    }
    async goTO(url:string){
        await this.page.goto(url)
    }

    async validlogin(username:string, password:string){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
       

    }

    async Invalidlogin(username:string, password:string){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
        await expect(this.errormsg).toContainText("Epic sadface: Username and password do not match any user in this service");
    }

    async verfiyPageURL(){
         await expect(this.page).toHaveURL(/inventory/);
         await expect(this.page.locator('.inventory_list')).toBeVisible();
    }
}


