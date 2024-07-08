import { Router } from "express";
import { Route } from "..";
import { CartController } from "../../../app/controllers/cart.controller";
import { RestActions } from "../../enum";

export class CartRoute {
  private static path = Router();

  public static draw() {
    Route.resource(this.path, CartController, {
      only: [RestActions.Index],
    });

    return this.path;
  }
}
