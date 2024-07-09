import { Request, Response } from "express";
import { ApplicationController } from "../application.controller";

export class CartController extends ApplicationController {
  public index(req: Request, res: Response) {
    res.render("cart.view/index");
  }
}
