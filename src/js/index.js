import App from "../../vanilla-spa/App.js";
import Router from "../../vanilla-spa/Router.js";
import Route from "../../vanilla-spa/Route.js";

import Home from "../views/Home.js";
import About from "../views/About.js";
import News from "../views/News.js";
import Page404 from "../views/Page404.js";

import Nav from "../components/Nav.js";

const home = new Home({
  components: [new Nav()],
});
const about = new About({});
const news = new News({});
const page404 = new Page404({});

const router = new Router({
  routes: [
    new Route({ path: "/", view: home }),
    new Route({ path: "/home", view: home }),
    new Route({ path: "/about", view: about }),
    new Route({ path: "/news", view: news }),
    new Route({ path: "/404", view: page404 }),
  ],
});

const app = new App({
  router,
});
