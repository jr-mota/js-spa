import Router from "./Router.js";

export default class App {
  _root = null;
  _router = {};

  constructor(args) {
    if (args.router && args.router instanceof Router) {
      this._router = args.router;
    }

    this.createRootElement();
  }

  createRootElement() {
    const root = document.getElementById("app");

    if (root) {
      this._root = root;
    } else {
      const newRoot = document.createElement("div");
      newRoot.id = "#app";
      document.body.appendChild(newRoot);

      this._root = newRoot;
    }
  }
}
