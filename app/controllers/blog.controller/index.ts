import { Request, Response } from "express";
import { ApplicationController } from "../application.controller";

export class BlogController extends ApplicationController {
  public index(req: Request, res: Response) {
    res.render("blog.view/index");
  }
}
