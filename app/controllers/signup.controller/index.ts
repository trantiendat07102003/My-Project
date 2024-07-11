import { Request, Response } from "express";
import { ApplicationController } from "../application.controller";

export class SignUpController extends ApplicationController {
  public index(req: Request, res: Response) {
    res.render("signup.view/index");
  }
}
