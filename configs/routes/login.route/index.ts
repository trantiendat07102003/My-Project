import { Router } from "express";
import { Route } from "..";
import { LoginController } from "../../../app/controllers/login.controller";
import { RestActions } from "../../enum";

export class LoginRoute {
  private static path = Router();

  public static draw() {
    Route.resource(this.path, LoginController, {
      only: [RestActions.Index],
    });

    return this.path;
  }
}
