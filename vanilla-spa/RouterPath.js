import BaseView from "./BaseView.js";

export default class RouterPath {
  path = "";
  view = {};

  constructor(args) {
    if (args.path && args.view) {
      if (typeof args.path !== "string" || !(args.view instanceof BaseView)) {
        throw new Error("RouterPath type error");
      }

      this.path = args.path;
      this.view = args.view;
    }
  }
}
