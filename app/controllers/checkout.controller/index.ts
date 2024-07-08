import { Request, Response } from "express";
import { ApplicationController } from "../application.controller";

export class CheckOutController extends ApplicationController {
  public index(req: Request, res: Response) {
    res.render("checkout.view/index", { title: "Check Out View" });
  }
}
