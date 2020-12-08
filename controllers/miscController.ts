import { Request, Response } from "express";

export class MiscController {
  public index(req: Request, res: Response) {
    res.send({
      name: "EatFastRepeat API",
      version: "1.0.0",
      time: new Date(),
    });
  }
}
