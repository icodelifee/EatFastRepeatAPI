import express = require("express");
import bodyParser = require("body-parser");
import morgan = require("morgan");
import { Routes } from "./config/routes";


class App {
  public app: express.Application;
  public routes: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.routes.initRoutes(this.app);
  }

  // express configs
  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(morgan("tiny"));
  }
}
export default new App().app;

