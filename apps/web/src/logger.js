import { createLogger, format } from "winston";
import BrowserConsole from "winston-transport-browserconsole";

export const logger = createLogger({
  level: "debug",
  format: format.json(),
  transports: [new BrowserConsole()],
});
