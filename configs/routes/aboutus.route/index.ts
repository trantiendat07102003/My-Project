import { Router } from "express";
import { Route } from "..";
import { AboutUsController } from "../../../app/controllers/aboutus.controller";
import { RestActions } from "../../enum";

export class AboutUsRoute {
  private static path = Router();

  public static draw() {
    Route.resource(this.path, AboutUsController, {
      only: [RestActions.Index],
    });

    return this.path;
  }
}
