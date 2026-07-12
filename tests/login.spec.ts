import { test, expect } from '@playwright/test';
import {Loginpage} from '../PageObjects/Loginpage';
import {loginDataTS} from '../testdata/loginData';
import logindata from '../testdata/loginData.json';
import { CurrentEnv } from '../configs/env';
import path from 'path';
import { readCSV } from '../utils/csvReader';



const logintestData = readCSV(
    path.join(__dirname, '../testdata/dataset.csv')
);


for (const data of logintestData) {


test(`@LogintestwithCsv Login with ${data.Username}`, async ({ page }) => {

  const loginpage = new Loginpage(page);
  await loginpage.goTO(data.URL);
  await loginpage.validlogin(data.Username, data.Password);
  //await loginpage.verfiyPageURL();
})
};

test(`@LogintestwithJson validuser Login with ${logindata.validUser.username}`, async ({ page }) => {

  const loginpage = new Loginpage(page);
  await loginpage.goTO(logindata.validUser.baseURL);
  await loginpage.validlogin(logindata.validUser.username, logindata.validUser.password);
  await loginpage.verfiyPageURL();
})



test('@LogintestwithTSObject Invalid Login test', async ({ page }) => {

  const loginpage = new Loginpage(page);
  await loginpage.goTO(loginDataTS.invalidUser.baseURL);
  await loginpage.Invalidlogin(loginDataTS.invalidUser.username,loginDataTS.invalidUser.password);

});


