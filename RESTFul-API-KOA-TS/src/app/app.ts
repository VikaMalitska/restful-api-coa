import * as Application from "koa";
import * as bodyParser from "koa-body";
import * as Router from "koa-router";
import {query} from "../db/connect-db";

export const DEFAULT_LIVE_myapp = "It's up";

export default class App {
  public app: Application;

  constructor() {
    this.app = new Application();

    const router = new Router();

    router.get("/", async (ctx: Application.Context) => {
      ctx.body = DEFAULT_LIVE_myapp;
    });
    //select All

    router.get("/messages", async (ctx: Application.Context) => {
      try {
        const result = await query("SELECT * FROM messages");
        ctx.body = result[0].text;
      } catch (err) {
        console.error("err", err);
        ctx.status = 204;
        ctx.body = "internal error";
      }
    });

    this.app.use(bodyParser()).use(router.routes());
  }

  public getInstance(): Application {
    console.log(DEFAULT_LIVE_myapp);
    return this.app;
  }
}
