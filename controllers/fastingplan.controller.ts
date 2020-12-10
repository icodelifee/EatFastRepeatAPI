import chalk from "chalk";
import { Request, Response } from "express";
import { DI } from "../constants";
import { wrap } from "mikro-orm";

export class FastingPlanController {
  /**
   * Get All Fasting Plans
   * @function
   * @public
   * @param {Request} req
   * @param {Response} res
   */

  public async index(_: Request, res: Response) {
    try {
      const plans = await DI.fastingPlanRepo.findAll();
      if (plans == null) res.status(200).json([]);
      res.status(200).json(plans);
    } catch (e) {
      console.log(chalk.redBright((e as Error).message));
      res.status(404).json({
        message: (e as Error).message,
      });
    }
  }
}
