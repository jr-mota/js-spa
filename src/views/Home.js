import BaseView from "../../vanilla-spa/BaseView.js";

export default class Home extends BaseView {
  constructor(args) {
    super(args);

    this._template = `
      ${this._components[0].getTemplate()}
    `;
  }
}
