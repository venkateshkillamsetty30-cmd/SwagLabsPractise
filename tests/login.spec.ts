import { test, expect } from '@playwright/test';
import {Loginpage} from '../PageObjects/Loginpage';
import {loginData} from '../testdata/loginData';
import logindata from '../testdata/loginData.json';
import { CurrentEnv } from '../configs/env';
import path from 'path';
import { readCSV } from '../utils/csvReader';



const logintestData = readCSV(
    path.join(__dirname, '../testdata/dataset.csv')
);


for (const data of logintestData) {

test.only(`Login with ${data.Username}`, async ({ page }) => {

  const loginpage = new Loginpage(page);
  await loginpage.goTO(data.URL);
  await loginpage.validlogin(data.Username, data.Password);
  //await loginpage.verfiyPageURL();
})
};


test('Invalid Login test', async ({ page }) => {

  const loginpage = new Loginpage(page);
  await loginpage.goTO(logindata.invalidUser.baseURL);
  await loginpage.Invalidlogin(logindata.invalidUser.username,logindata.invalidUser.password);

});


