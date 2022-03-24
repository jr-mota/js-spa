import Router from "./Router.js";

export default class App {
  router = {};

  constructor(args) {
    if (args.router && args.router instanceof Router) {
      this.router = args.router;
    }
  }
}
