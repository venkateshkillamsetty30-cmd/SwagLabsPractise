import { test as base } from '@playwright/test';

type LoginData = {
  username: string;
  password: string;
  baseurl: string;
};

export const logintestdata = base.extend<{LoginData:LoginData}>({
  LoginData: async({},use)=>{

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
