import { Router } from "express";
import { Route } from "..";
import { ServiceController } from "../../../app/controllers/service.controller";
import { RestActions } from "../../enum";

export class ServiceRoute {
  private static path = Router();

  public static draw() {
    Route.resource(this.path, ServiceController, {
      only: [RestActions.Index],
    });

    return this.path;
  }
}
