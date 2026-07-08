import {test as base,Page } from '@playwright/test';
import { Loginpage } from '../PageObjects/Loginpage';
import { PLPpage } from '../PageObjects/PLPpage';
import {loginData} from '../testdata/loginData';

type MyFixtures = {
  loggedInPage: Page;
  CheckoutPage:Page;
};

export const test = base.extend<MyFixtures>({

    loggedInPage : async({page}, use) => {
      const loginpage = new Loginpage(page);
      loginpage.goTO(loginData.validUser.baseURL);
      loginpage.validlogin(loginData.validUser.username, loginData.validUser.password);

    await use(page);

    },

    CheckoutPage: async({page} ,use) => {

      const plppage = new PLPpage(page);
      plppage.AddProducttocart();
      await use(page);

    }


})

export { expect } from '@playwright/test';