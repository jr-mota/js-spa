import Route from "./Route.js";

export default class Router {
  _currPath = "";
  _routes = [];

  constructor(args) {
    if (args.routes && Array.isArray(args.routes)) {
      for (const route of args.routes) {
        if (!(route instanceof Route)) {
          throw new Error("RouterPath type error");
        }
      }

      this._routes = args.routes;
    }

    this._currPath = window.location.pathname;

    document.addEventListener("click", this.handleClickToHref.bind(this));
    window.addEventListener("popstate", this.handlePopstate.bind(this));

    this.renderPage();
  }

  renderPage() {
    for (const route of this._routes) {
      if (this._currPath === route.getPath()) {
        document.getElementById("app").innerHTML = route
          .getView()
          .getTemplate();

        window.history.pushState("", "", this._currPath);

        return;
      }
    }
  }

  handleClickToHref(e) {
    if (e.target.tagName === "A") {
      e.preventDefault();

      this._currPath = e.target.pathname;

      this.renderPage();
    }
  }

  handlePopstate(e) {
    this._currPath = window.location.pathname;

    this.renderPage();
  }
}
