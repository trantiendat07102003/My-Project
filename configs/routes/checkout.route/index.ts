import { Router } from "express";
import { Route } from "..";
import { CheckOutController } from "../../../app/controllers/checkout.controller";
import { RestActions } from "../../enum";

export class CheckOutRoute {
  private static path = Router();

  public static draw() {
    Route.resource(this.path, CheckOutController, {
      only: [RestActions.Index],
    });

    return this.path;
  }
}
