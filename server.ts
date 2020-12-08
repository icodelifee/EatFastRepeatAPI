require("dotenv").config();

import chalk from "chalk";
import app from "./app";
const PORT = process.env.PORT || 3080;

app.listen(PORT, () => {
  console.log(
    chalk.greenBright(
      `⚡️[server]: Server is running at https://localhost:${PORT}\n`
    )
  );
});
