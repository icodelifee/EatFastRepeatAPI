import { Application } from "express";
import { FastingController } from "../controllers/fasting.controller";
import { FastingPlanController } from "../controllers/fastingplan.controller";
import { MiscController } from "../controllers/misc.controller";
import { UserController } from "../controllers/user.controller";
import { Fasting } from "../entities";

export class Routes {
  public miscController: MiscController = new MiscController();
  public userController: UserController = new UserController();
  public fastingPlanController: FastingPlanController = new FastingPlanController();
  public fastingControler: FastingController = new FastingController();

  public initRoutes(app: Application): void {
    app.route("/").get(this.miscController.index);

    // User Endpoints
    app.route("/users").get(this.userController.index);
    app.route("/users/:id").get(this.userController.getById);
    app.route("/users").post(this.userController.insertUser);
    app.route("/users/:id").put(this.userController.updateUser);

    // Fasting Plan endpoints
    app.route("/fastingPlans").get(this.fastingPlanController.index);

    // Fasting endpoints
    app.route("/user/:id/fasting").get(this.fastingControler.index);
    app.route("/user/:id/addFasting").post(this.fastingControler.addFasting); 
  }
}
