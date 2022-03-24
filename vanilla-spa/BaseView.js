import BaseComponent from "./BaseComponent.js";

export default class BaseView {
  template = ``;
  components = [];

  constructor(args) {
    if (args.components && Array.isArray(args.components)) {
      for (const component of args.components) {
        if (!(component instanceof BaseComponent)) {
          throw new Error("Component type error");
        }
      }

      this.components = args.components;
    }
  }
}
