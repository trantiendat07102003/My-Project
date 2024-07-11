import { Request, Response } from "express";
import { ApplicationController } from "../application.controller";

export class LoginController extends ApplicationController {
  public index(req: Request, res: Response) {
    res.render("login.view/index");
  }
}
