export * from './modules/logger'

// import { LOGGER_STATUS } from './modules/enum/logger'
// import log from './modules/logger'

// import { client } from "./config/es-database";


// const start = async() => {
//    const loger = await log(LOGGER_STATUS.SUCCESS,"delete product", {
//         title:"tidak ada rumah",
//         price:500000,
//         created:{"name": "calfin", uuid:"eff0-fe43-fdef-343ffef-fefsf"}
//     }, {title:"tidak ada rumah",
//     price:500000,
//     created:{"name": "calfin", uuid:"eff0-fe43-fdef-343ffef-fefsf"}} )
//     console.log(loger,'log')
//     return loger
// }


// start()

// import {test} from './models/es-logger'
// test()

// const esClient = require('./config/es-database');
// const createIndex = async function(indexName:string){
//     return await client.indices.create({
//         index: indexName
//     });
// }

// module.exports = createIndex;


// async function test(){
//     try {
//         const resp = await createIndex('log_v2');
//         console.log(resp);
//     } catch (e) {
//         console.log(e);
//     }
// }
// test();