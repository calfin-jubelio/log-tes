import {v4 as uuid} from 'uuid'
import { LOGGER_STATUS } from './enum/logger'
import {client} from '../config/es-database'

//test();
let username:string
let service:string


export const initiate = (user:string, serv:string) => {
    username = user
    service = serv
}

async function log(status:LOGGER_STATUS,activity:string, request:any,response:any)  {
  let payload = {
      uuid: uuid(),
      status: status,
      service: "post service",
      username: "calfin",
      activity: activity,
      request: request,
      response: response,
  }
  await insertDoc("testing", payload.uuid, payload)
  return payload
}

const insertDoc = async function(indexName:string, uuid:string, data:any){
  return await client.index({
      index: indexName,
      id: uuid,
      body: data
  });
}



export default log