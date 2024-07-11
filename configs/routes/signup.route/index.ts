import { Router } from "express";
import { Route } from "..";
import { SignUpController } from "../../../app/controllers/signup.controller";
import { RestActions } from "../../enum";

export class SignUpRoute {
  private static path = Router();

  public static draw() {
    Route.resource(this.path, SignUpController, {
      only: [RestActions.Index],
    });

    return this.path;
  }
}
