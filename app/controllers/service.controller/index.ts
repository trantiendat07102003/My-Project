import { Request, Response } from "express";
import { ApplicationController } from "../application.controller";

export class ServiceController extends ApplicationController {
  public index(req: Request, res: Response) {
    res.render("service.view/index", { title: "Service View" });
  }
}
