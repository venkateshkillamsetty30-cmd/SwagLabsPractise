import {Page,Locator,expect} from '@playwright/test'


export class PLPpage {

  page: Page;
  SauceLabsBackpack: Locator;
  Cartlink:Locator;

    constructor(page:Page){
        this.page = page;
        this.SauceLabsBackpack = page.locator('#add-to-cart-sauce-labs-backpack');
        this.Cartlink = page.locator('.shopping_cart_link')

    }

    async AddProducttocart(){
        await this.SauceLabsBackpack.click();
        await expect(this.page.locator('span.shopping_cart_badge')).toHaveText("1");
        await this.Cartlink.click();
        await expect(this.page.locator('.inventory_item_name')).toBeVisible();
    }
}