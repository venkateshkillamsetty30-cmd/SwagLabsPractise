import { test, expect } from '@playwright/test';
import {Loginpage} from '../PageObjects/Loginpage';
import {loginDataTS} from '../testdata/loginData';
import loginData from '../testdata/loginData.json';
import path from 'path';
import { readCSV } from '../utils/csvReader';
import {loginTest} from '../fixtures/datafixture'



const logintestData = readCSV(
    path.join(__dirname, '../testdata/dataset.csv')
);


for (const data of logintestData) {

//this test will use the data from the CSV file and will run the test with that data.
test(`@LogintestwithCsv Login with ${data.Username}`, async ({ page }) => {

  const loginpage = new Loginpage(page);
  await loginpage.goTO(data.URL);
  await loginpage.validlogin(data.Username, data.Password);
  //await loginpage.verfiyPageURL();
})
};

//this test will use the data from the JSON file and will run the test with that data.
test(`@LogintestwithJson validuser Login with ${loginData.validUser.username}`, async ({ page }) => {

  const loginpage  = new Loginpage(page);
  await loginpage.goTO(loginData.validUser.baseURL);
  await loginpage.validlogin(loginData.validUser.username, loginData.validUser.password);
  await loginpage.verfiyPageURL();
})

//this test will use the data from the TS object file and will run the test with that data.

test('@LogintestwithTSObject Invalid Login test', async ({ page }) => {

  const loginpage = new Loginpage(page);
  await loginpage.goTO(loginDataTS.invalidUser.baseURL);
  await loginpage.Invalidlogin(loginDataTS.invalidUser.username,loginDataTS.invalidUser.password);

});

//this is a custom test with custom fixture which is defined in fixtures/datafixture.ts file. This test will use the data from the fixture and will run the test with that data.

loginTest('use data from fixture', async ({ page, logindata }) => {

  const loginpage  = new Loginpage(page);
  await loginpage.goTO(logindata.baseurl);
  await loginpage.validlogin(logindata.username, logindata.password);
  await loginpage.verfiyPageURL();
})