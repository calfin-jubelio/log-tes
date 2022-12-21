import * as dotenv from "dotenv";
import { ENABLE_LOG } from "../modules/enum/logger";
dotenv.config();
export const CONFIG = {
  ENABLE_LOG: ENABLE_LOG,
  ES_API_KEY: process.env.ES_API_KEY,
  ES_LOG_ID: process.env.ES_LOG_ID,
  ENABLE_APM: process.env.ENABLE_APM === undefined ? false : JSON.parse(process.env.ENABLE_APM),
  SERVICE_NAME: process.env.SERVICE_NAME,
};
