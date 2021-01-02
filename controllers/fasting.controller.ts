import { Request, Response } from "express";
import { DI } from "../constants";
import { Fasting, FastingPlan, User } from "../entities";
import { LoggerType,Logger } from "../utils/logger";

export class FastingController {
  /**
   * Get All Fastings By User
   * @function
   * @public
   * @param {Request} req
   * @param {Response} res
   */

  public async index(req: Request, res: Response) {
    try {
      const fasts = await DI.fastingRepo.findAll({
        user: {
          email: req.params.id,
        },
      });
      if (fasts == null) res.status(200).json([]);
      res.status(200).json(fasts);
    } catch (e) {
      Logger.log(LoggerType.ERROR, (e as Error).message);
      res.status(404).json({
        message: (e as Error).message,
      });
    }
  }

  /**
   * Add Fasting Details Of User
   * @function
   * @public
   * @param {Request} req
   * @param {Response} res
   */

  public async addFasting(req: Request, res: Response) {
    if (Object.keys(req.body).length === 0) {
      res.status(404).send({
        message: "Please Provide All The Fields",
      });
    }

    try {
      const user: User = await DI.userRepo.findOneOrFail({
        email: req.params.id,
      });

      const fastingPlan: FastingPlan = await DI.fastingPlanRepo.findOneOrFail({
        id: req.body.fasting_plan_id,
      });

      const fast = new Fasting(req.body, fastingPlan, user);

      DI.fastingRepo.persistAndFlush(fast);
      res.status(200).json(fast);
    } catch (e) {
      Logger.log(LoggerType.ERROR, (e as Error).message);
      res.status(404).json({
        message: (e as Error).message,
      });
    }
  }
}
