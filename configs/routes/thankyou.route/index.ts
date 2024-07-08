import { Router } from "express";
import { Route } from "..";
import { ThankYouController } from "../../../app/controllers/thankyou.controller";
import { RestActions } from "../../enum";

export class ThankYouRoute {
  private static path = Router();

  public static draw() {
    Route.resource(this.path, ThankYouController, {
      only: [RestActions.Index],
    });

    return this.path;
  }
}
