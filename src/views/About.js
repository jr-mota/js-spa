import BaseView from "../../vanilla-spa/BaseView.js";

export default class About extends BaseView {
  constructor(args) {
    super(args);

    this._template = `
      <h1 align="center">About</h1> 
    `;
  }
}
