require("dotenv").config();

import app from "./app";
const PORT = process.env.PORT || 3080;

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
