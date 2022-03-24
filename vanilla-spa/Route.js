import BaseView from "./BaseView.js";

export default class Route {
  _path = "";
  _view = {};

  constructor(args) {
    if (args.path && args.view) {
      if (typeof args.path !== "string" || !(args.view instanceof BaseView)) {
        throw new Error("RouterPath type error");
      }

      this._path = args.path;
      this._view = args.view;
    }
  }

  getPath() {
    return this._path;
  }

  getView() {
    return this._view;
  }
}
