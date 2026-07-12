import {test as base,Page } from '@playwright/test';
import { Loginpage } from '../PageObjects/Loginpage';
import { PLPpage } from '../PageObjects/PLPpage';
import {loginDataTS} from '../testdata/loginData';

type MyFixtures = {
  loggedInPage: Page;
  CheckoutPage:Page;
};

export const test = base.extend<MyFixtures>({

    loggedInPage : async({page}, use) => {
      const loginpage = new Loginpage(page);
      loginpage.goTO(loginDataTS.validUser.baseURL);
      loginpage.validlogin(loginDataTS.validUser.username, loginDataTS.validUser.password);

    await use(page);

    },

    CheckoutPage: async({page} ,use) => {

      const plppage = new PLPpage(page);
      plppage.AddProducttocart();
      await use(page);

    }


})

export { expect } from '@playwright/test';