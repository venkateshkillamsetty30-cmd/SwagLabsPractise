import {Page,Locator,expect} from '@playwright/test'

export class CheckoutOverview {

    page:Page;
    finish:Locator;
    ordermsg:Locator;



    constructor(page:Page) {

        this.page = page;
        this.finish = page.getByRole('button',{name:"finish"});
        this.ordermsg = page.locator('.complete-header');
    }

    async CheckoutOverviewAndPlaceOrder(){
        await this.finish.click();
        await expect(this.ordermsg).toHaveText('Thank you for your order!');
    }
}