import App from "../vanilla-spa/App.js";
import Router from "../vanilla-spa/Router.js";
import RouterPath from "../vanilla-spa/RouterPath.js";

import Home from "./views/Home.js";
import MyComponent from "./components/MyComponent.js";

const home = new Home({
  components: [new MyComponent(), new MyComponent(), new MyComponent()],
});

const router = new Router({
  routes: [
    new RouterPath({ path: "/", view: home }),
    new RouterPath({ path: "/home", view: home }),
  ],
});

const app = new App({
  router,
});
