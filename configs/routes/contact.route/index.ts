import { Router } from "express";
import { Route } from "..";
import { ContactController } from "../../../app/controllers/contact.controller";
import { RestActions } from "../../enum";

export class ContactRoute {
  private static path = Router();

  public static draw() {
    Route.resource(this.path, ContactController, {
      only: [RestActions.Index],
    });

    return this.path;
  }
}
