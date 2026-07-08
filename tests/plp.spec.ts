import { test, expect } from '../fixtures/pages.fixture';
import {PLPpage} from '../PageObjects/PLPpage';

test('Add Product to Cart', async ({ loggedInPage,page }) => {

  const plppage = new PLPpage(page);
  await plppage.AddProducttocart();


});
