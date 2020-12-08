import chalk from "chalk";
import { Request, Response } from "express";
import { DI } from "../constants";

export class UserController {

  /*
    Route endpoint
  */
  public index(_: Request, res: Response) {
    res.send("Users Endpoint");
  }

  /**
   * Get User By ID [email]
   * @function
   * @public
   * @param {Request} req
   * @param {Response} res
   */
  public async getById(req: Request, res: Response) {
    const email: string = req.params.email;
    const user = await DI.userRepo.findOne({
      email: email,
    });
    if (user == null) {
      res.status(404).json({
        message: "User Not Found",
      });
    } else {
      res.status(200).json(user);
    }
  }

  /**
   * Insert User
   * @function
   * @public
   * @param {Request} req
   * @param {Response} res
   */
  public async insertUser(req: Request, res: Response) {
    const user = await DI.userRepo.findOne({
      email: req.body.email,
    });
    if (user == null) {
      try {
        const ruser = DI.userRepo.create(req.body);
        DI.userRepo.persist(ruser).flush();
        res.status(400).json(ruser);
      } catch (e) {
        console.log(chalk.redBright((e as Error).message));
        res.status(404).send({
          message: (e as Error).message,
        });
      }
    } else {
      res.status(404).json({
        message: "User Already Exists",
      });
    }
  }
}
