import { Application } from "express";
import { FastingPlanController } from "../controllers/fastingplan.controller";
import { MiscController } from "../controllers/misc.controller";
import { UserController } from "../controllers/user.controller";

export class Routes {
  public miscController: MiscController = new MiscController();
  public userController: UserController = new UserController();
  public fastingPlanController: FastingPlanController = new FastingPlanController();

  public initRoutes(app: Application): void {
    app.route("/").get(this.miscController.index);

    // User Endpoints
    app.route("/users").get(this.userController.index);
    app.route("/users/:id").get(this.userController.getById);
    app.route("/users").post(this.userController.insertUser);
    app.route("/users/:id").put(this.userController.updateUser);

    // Fasting Plan endpoints
    app.route("/fastingPlans").get(this.fastingPlanController.index);
  
  }
}
