import {devConfig} from '../configs/saucedemo/environments/dev';
import {qaConfig} from '../configs/saucedemo/environments/qa';



type Env = 'dev' | 'qa';
const configs = {
  dev: devConfig,
  qa: qaConfig,
};


const env = (process.env.TEST_ENV || 'dev').toLowerCase() as Env;

export const CurrentEnv = configs[env];
