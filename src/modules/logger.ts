import { CONFIG } from "../utils/config";
import { ENABLE_LOG, LOGGER_STATUS } from "./enum/logger";
import { v4 as uuid } from "uuid";
import { ILoggerEntity } from "./interfaces/logger";

class Logger implements ILoggerEntity {
  public username: string;
  public activity: string;
  public service: string;
  public request: { [k: string]: any };
  public response: { [k: string]: any };

  constructor(params: ILoggerEntity) {
    this.activity = params.activity;
    this.username = params.username;
    this.service = params.service;
    this.request = params.request;
    this.response = params.response;
  }

  log(status: LOGGER_STATUS, is_active: ENABLE_LOG) {
    if (is_active === ENABLE_LOG.ACTIVE) {
      return {
        uuid: uuid(),
        elastic_json: {
          status: status,
          activity: this.activity,
          username: this.username,
          service: this.service,
          request: this.request,
          response: this.response,
        },
        log_date: new Date(),
      };
    } else {
    }
  }
}


export {Logger}