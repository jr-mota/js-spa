import BaseComponent from "./BaseComponent.js";

export default class BaseView {
  _template = ``;
  _components = [];

  constructor(args) {
    if (args.components && Array.isArray(args.components)) {
      for (const component of args.components) {
        if (!(component instanceof BaseComponent)) {
          throw new Error("Component type error");
        }
      }

      this._components = args.components;
    }
  }

  getTemplate() {
    return this._template;
  }
}
