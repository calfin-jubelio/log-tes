import {LOGGER_STATUS } from "./enum/logger";
import { v4 as uuid } from "uuid";
import { ILoggerEntity } from "./interfaces/logger";

class Logger implements ILoggerEntity {
  public username: string;
  public service: string;

  constructor(params: ILoggerEntity) {
    this.service = params.service;
    this.username = params.username;
  }

  log(status: LOGGER_STATUS, activity:string, request:any, response:any) {

      return {
        uuid: uuid(),
        status: status,
        service: this.service,
        username: this.username,
        activity: activity,
        request: request,
        response: response,
        log_date: new Date(),
      };
  }
}
export {Logger}