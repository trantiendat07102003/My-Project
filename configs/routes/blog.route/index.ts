import { Router } from "express";
import { Route } from "..";
import { BlogController } from "../../../app/controllers/blog.controller";
import { RestActions } from "../../enum";

export class BlogRoute {
  private static path = Router();

  public static draw() {
    Route.resource(this.path, BlogController, {
      only: [RestActions.Index],
    });

    return this.path;
  }
}
