import { Router } from "express";
import { Route } from "..";
import { HomeController } from "../../../app/controllers/home.controller";
import { RestActions } from "../../enum";

export class HomeRoute {
  private static path = Router();

  public static draw() {
    Route.resource(this.path, HomeController, {
      only: [RestActions.Index],
    });

    return this.path;
  }
}
