import { test as base } from '@playwright/test';

type LogintestData = {
  username: string;
  password: string;
  baseurl: string;
};

export const logintestdata = base.extend<{LoginData:LogintestData}>({
  LogintestData: async({},use)=>{

    console.log("Before test");

    const data = {
        username: 'standard_user',
        password: 'secret_sauce',
        baseurl: 'https://www.saucedemo.com'
    };
    await use(data);
    console.log("after test");
  }
});
