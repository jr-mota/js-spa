import RouterPath from "./RouterPath.js";

export default class Router {
  routes = [];

  constructor(args) {
    if (args.routes && Array.isArray(args.routes)) {
      for (const route of args.routes) {
        if (!(route instanceof RouterPath)) {
          throw new Error("RouterPath type error");
        }
      }

      this.routes = args.routes;
    }
  }
}
