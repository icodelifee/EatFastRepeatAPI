import express = require("express");
import bodyParser = require("body-parser");
import morgan = require("morgan");
import { Routes } from "./config/routes";
import { MikroORM } from "@mikro-orm/core";
import { DI } from "./constants";
import chalk from "chalk";
import { Fasting, FastingPlan, User } from "./entities";

class App {
  public app: express.Application;
  public routes: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.initDb();
    this.routes.initRoutes(this.app);
  }

  public async initDb() {
    try {
      DI.orm = await MikroORM.init();
      DI.userRepo = DI.orm.em.getRepository(User);
      DI.fastingRepo = DI.orm.em.getRepository(Fasting);
      DI.fastingPlanRepo = DI.orm.em.getRepository(FastingPlan);
    } catch (e) {
      chalk.redBright(`${(e as Error).message}\n`);
    }
  }
  // express configs
  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(morgan("tiny"));
  }
}
export default new App().app;
