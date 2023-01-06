// import { createLogger, format } from "winston";
// import BrowserConsole from "winston-transport-browserconsole";

// export const logger = createLogger({
//   level: "debug",
//   format: format.json(),
//   transports: [new BrowserConsole()],
// });

// import * as winston from "winston";
// import BrowserConsole from "winston-transport-browserconsole";

// const level = "debug";
// winston.configure({
//   transports: [
//     new BrowserConsole({
//       format: winston.format.simple(),
//       level,
//     }),
//   ],
// });

const logger = {
  info: (args: any) => {},
};

export { logger };

export default logger;
