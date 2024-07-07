import { Router } from "express";
import { RestActions } from "../enum";
import { HomeRoute } from "./home.route";
import { ShopRoute } from "./shop.route";

export class Route {
  private static path = Router();

  public static draw() {
    this.path.use("/", HomeRoute.draw());
    this.path.use("/shops", ShopRoute.draw());

    return this.path;
  }

  public static resource(
    path: Router,
    CustomController: any,
    filter?: {
      only?: RestActions[];
      except?: RestActions[];
    }
  ) {
    if (filter?.only && filter?.except) {
      throw new Error("Can only pass only or except!");
    }

    const action = new CustomController();

    if (this.isAllowAccess(filter?.only, filter?.except, RestActions.Index))
      this.path.route("/").get(action.index);

    if (this.isAllowAccess(filter?.only, filter?.except, RestActions.Show))
      this.path.route(`/:id`).get(action.show);

    if (this.isAllowAccess(filter?.only, filter?.except, RestActions.New))
      this.path.route(`/new`).get(action.new);

    if (this.isAllowAccess(filter?.only, filter?.except, RestActions.Create))
      this.path.route("/").post(action.create);

    if (this.isAllowAccess(filter?.only, filter?.except, RestActions.Edit))
      this.path.route(`/:id/edit`).get(action.edit);

    if (this.isAllowAccess(filter?.only, filter?.except, RestActions.Update))
      this.path.route(`/:id`).put(action.update);

    if (this.isAllowAccess(filter?.only, filter?.except, RestActions.Destroy))
      this.path.route(`/:id`).delete(action.destroy);
  }

  private static isAllowAccess(
    only: RestActions[] | undefined,
    except: RestActions[] | undefined,
    action: RestActions
  ) {
    return (
      (!only && !except) ||
      (only && only?.includes(action)) ||
      (except && !except?.includes(action))
    );
  }
}
