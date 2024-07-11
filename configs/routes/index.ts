import { Router } from "express";
import { RestActions } from "../enum";
import { AboutUsRoute } from "./aboutus.route";
import { BlogRoute } from "./blog.route";
import { CartRoute } from "./cart.route";
import { CheckOutRoute } from "./checkout.route";
import { ContactRoute } from "./contact.route";
import { HomeRoute } from "./home.route";
import { LoginRoute } from "./login.route";
import { ServiceRoute } from "./services.route";
import { ShopRoute } from "./shop.route";
import { SignUpRoute } from "./signup.route";
import { ThankYouRoute } from "./thankyou.route";

export class Route {
  private static path = Router();

  public static draw() {
    this.path.use("/", HomeRoute.draw());
    this.path.use("/shops", ShopRoute.draw());
    this.path.use("/aboutus", AboutUsRoute.draw());
    this.path.use("/blogs", BlogRoute.draw());
    this.path.use("/carts", CartRoute.draw());
    this.path.use("/checkouts", CheckOutRoute.draw());
    this.path.use("/contacts", ContactRoute.draw());
    this.path.use("/services", ServiceRoute.draw());
    this.path.use("/thankyou", ThankYouRoute.draw());
    this.path.use("/login", LoginRoute.draw());
    this.path.use("/signup", SignUpRoute.draw());

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
      path.route("/").get(action.index);

    if (this.isAllowAccess(filter?.only, filter?.except, RestActions.Show))
      path.route(`/:id`).get(action.show);

    if (this.isAllowAccess(filter?.only, filter?.except, RestActions.New))
      path.route(`/new`).get(action.new);

    if (this.isAllowAccess(filter?.only, filter?.except, RestActions.Create))
      path.route("/").post(action.create);

    if (this.isAllowAccess(filter?.only, filter?.except, RestActions.Edit))
      path.route(`/:id/edit`).get(action.edit);

    if (this.isAllowAccess(filter?.only, filter?.except, RestActions.Update))
      path.route(`/:id`).put(action.update);

    if (this.isAllowAccess(filter?.only, filter?.except, RestActions.Destroy))
      path.route(`/:id`).delete(action.destroy);
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
