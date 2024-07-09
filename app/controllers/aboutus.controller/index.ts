import { Request, Response } from "express";
import { ApplicationController } from "../application.controller";

export class AboutUsController extends ApplicationController {
  public index(req: Request, res: Response) {
    res.render("aboutus.view/index");
  }
}
