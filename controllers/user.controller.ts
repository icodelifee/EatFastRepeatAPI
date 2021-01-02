import chalk from "chalk";
import { Request, Response } from "express";
import { DI } from "../constants";
import { wrap } from "mikro-orm";
import { LoggerType } from "../utils/logger";

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
    const email: string = req.params.id;
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
    if (Object.keys(req.body).length === 0) {
      res.status(404).send({
        message: "Please Provide All The Fields",
      });
    }
    let user;
    try {
      user = await DI.userRepo.findOneOrFail({
        email: req.body.email,
      });
    } catch (e) {
      console.log(chalk.bgCyan("User Not Found!"))
    }
    if (user == null) {
      try {
        const ruser = DI.userRepo.create(req.body);
        DI.userRepo.persist(ruser).flush();
        res.status(400).json(ruser);
      } catch (e) {
        DI.logger.log(LoggerType.ERROR, (e as Error).message);

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

  public async updateUser(req: Request, res: Response) {
    try {
      const user = await DI.userRepo.findOne({
        email: req.params.id,
      });
      if (user == null) {
        res.status(404).send({
          message: "User Not Found",
        });
      }
      wrap(user).assign(req.body);
      DI.userRepo.flush();
      res.status(200).json(user);
    } catch (e) {
      DI.logger.log(LoggerType.ERROR, (e as Error).message);

      res.status(404).send((e as Error).message);
    }
  }
}
