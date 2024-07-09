import { Request, Response } from "express";
import { ApplicationController } from "../application.controller";

export class ShopController extends ApplicationController {
  public index(req: Request, res: Response) {
    res.render("shop.view/index");
  }
}
