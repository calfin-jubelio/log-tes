import {v4 as uuid} from 'uuid'
import { LOGGER_STATUS } from './enum/logger'
import  '../config/database'
import LogModel from '../models/logger'

let username:string
let service:string

export const initiate = (user:string, serv:string) => {
    username = user
    service = serv
}

export const log = async(status:LOGGER_STATUS,activity:string, request:any,response:any) => {
  let payload = {
      uuid: uuid(),
      status: status,
      service: service,
      username: username,
      activity: activity,
      request: request,
      response: response,
      log_date: new Date(),
  }
  const log = await LogModel.create({
      uuid: payload.uuid,
      status: payload.status,
      service: payload.service,
      username: payload.username,
      activity: payload.activity,
      request: payload.request,
      response: payload.response,
      log_date: payload.log_date,
  })
  return payload
}