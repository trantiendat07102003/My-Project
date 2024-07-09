import { Request, Response } from "express";
import { ApplicationController } from "../application.controller";

export class ThankYouController extends ApplicationController {
  public index(req: Request, res: Response) {
    res.render("thankyou.view/index");
  }
}
