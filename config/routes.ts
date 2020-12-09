import { Application } from "express";
import { MiscController } from "../controllers/misc.controller";
import { UserController } from "../controllers/user.controller";

export class Routes {
  public miscController: MiscController = new MiscController();
  public userController: UserController = new UserController();

  public initRoutes(app: Application): void {
    app.route("/").get(this.miscController.index);
    app.route("/users").get(this.userController.index);
    app.route("/users/:id").get(this.userController.getById);
    app.route("/users").post(this.userController.insertUser);
    app.route("/users/:id").put(this.userController.updateUser);
  }
}
