import {v4 as uuid} from 'uuid'
import LogModel from '../models/logger'
import { LOGGER_STATUS } from './enum/logger'

let username:string
let service:string

export const initiate = (user:string, serv:string) => {
    username = user
    service = serv
}

export const log = (status:LOGGER_STATUS,activity:string, request:any,response:any) => {
  let payload = {
      uuid: uuid(),
      status: status,
      service: username,
      username: service,
      activity: activity,
      request: request,
      response: response,
      log_date: new Date(),
  }
  LogModel.create(payload)
  return payload
}