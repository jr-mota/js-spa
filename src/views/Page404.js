import BaseView from "../../vanilla-spa/BaseView.js";

export default class Page404 extends BaseView {
  constructor(args) {
    super(args);

    this._template = `
      <h1 align="center">404 not found</h1> 
    `;
  }
}
