import { CONFIG } from "./config";
import winston from "winston";
import { ElasticsearchTransport } from "winston-elasticsearch";

let apm;

let esTransportOpts;

let initialized = false;
const ENV = process.env.NODE_ENV;
let logger;
let esTransport;

if (ENV && ENV !== "development" && CONFIG.ES_API_KEY && CONFIG.ES_LOG_ID) {
  if (CONFIG.ENABLE_APM) {
    apm = require("elastic-apm-node").start({
      serviceName: CONFIG.SERVICE_NAME,
      serverUrl: "https://apm-server.jubelio.com",
      secretToken: "&z#damu3NFGC!LUg",
      logUncaughtExceptions: true,
      disableInstrumentations: ["@elastic/elasticsearch"],
    });
  }

  esTransportOpts = {
    apm,
    level: "info",
    retryLimit: 1,
    dataStream: true,
    clientOpts: {
      node: "https://es.jubelio.com",
      auth: {
        apiKey: Buffer.from(`${CONFIG.ES_LOG_ID}:${CONFIG.ES_API_KEY}`).toString("base64"),
      },
    },
  };

  esTransport = new ElasticsearchTransport(esTransportOpts);

  logger = winston.createLogger({
    transports: [esTransport],
  });

  logger.on("error", (error) => {
    // console.error('Error caught', error);
  });

  esTransport.on("warning", (error) => {
    // console.error('Error caught', error);
  });

  initialized = true;
} else {
  logger = {
    log: (msg: any) => {
      console.log(msg);
    },
    error: (msg: any) => {
      console.error(msg);
    },
  };
}

const opts = {
  url: "https://api.ipify.org",
  method: "GET",
  headers: {
    "User-Agent": "curl/7.37.1",
  },
  json: true,
};

export { opts };
