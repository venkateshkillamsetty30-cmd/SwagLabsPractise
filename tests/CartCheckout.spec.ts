import { test, expect } from '../fixtures/pages.fixture';
import {Cartpage} from '../PageObjects/Cartpage';
import {PLPpage} from '../PageObjects/PLPpage';
import { CheckoutOverview } from '../PageObjects/CheckoutOverviewpage';

test('Checkout and Complete Order', async ({ loggedInPage,CheckoutPage,page }) => {

  const cartpage = new Cartpage(page);
  const checkoutOverview = new CheckoutOverview(page);
  
  await cartpage.CheckoutCart();
  await checkoutOverview.CheckoutOverviewAndPlaceOrder();

});
