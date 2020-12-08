import { Request, Response, Application } from "express";
import { MiscController } from "../controllers/misc.controller";

export class Routes {
  public miscController: MiscController = new MiscController();

  public initRoutes(app: Application): void {
    app.route("/").get(this.miscController.index)
  }
}
