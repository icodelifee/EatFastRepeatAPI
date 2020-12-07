import express = require("express");
import bodyParser = require("body-parser");
import morgan = require("morgan");
const PORT = process.env.PORT || 3080;


const app: express.Application = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.get("/", (_, res) => {
  res.send("Eat Fast Repeat API v1");
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
