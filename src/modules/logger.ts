import {v4 as uuid} from 'uuid'
import { LOGGER_STATUS } from './enum/logger'
import {query} from '../config/pg-database'

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
  const sql = 'INSERT INTO logs (uuid, status, service,username,activity,request,response,log_date) VALUES ($1, $2, $3, $4,$5,$6,$7) RETURNING *';
  const values = [payload.uuid,payload.status,payload.service,payload.username,payload.activity,payload.request,payload.response,payload.log_date];
  query(sql, values)
  .then((res) => console.log(res.rows[0]))
  .catch((err) => console.error(err));
  return payload
}