import { logger } from "@disco/logging";

require("dotenv").config();
require("dd-trace").init({ logger });

import app from "./src/app";

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => logger.info(`http://localhost:${PORT}`));
