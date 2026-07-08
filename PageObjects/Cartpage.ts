import {Page,Locator,expect} from '@playwright/test'


export class Cartpage {

  page: Page;
  Checkout: Locator;
  firstname:Locator;
  lastname:Locator;
  zipcode:Locator;
  continue:Locator;
  finish:Locator;
  ordermsg:Locator;

    constructor(page:Page){
        this.page = page;
        this.Checkout = page.getByRole('button',{name:"checkout"});
        this.firstname = page.getByPlaceholder("First Name");
        this.lastname = page.getByPlaceholder("Last Name");
        this.zipcode =  page.getByPlaceholder('Zip/Postal Code');
        this.continue = page.locator('#continue');
        this.finish = page.getByRole('button',{name:"finish"});
        this.ordermsg = page.locator('.complete-header');

    }

    async CheckoutCart(){
        await this.Checkout.click();
        await this.firstname.fill("Venkatesh");
        await this.lastname.fill("venky");
        await this.zipcode.fill("530007");
        await this.continue.click();
    }
}