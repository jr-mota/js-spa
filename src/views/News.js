import BaseView from "../../vanilla-spa/BaseView.js";

export default class News extends BaseView {
  constructor(args) {
    super(args);

    this._template = `
      <h1 align="center">News</h1> 
    `;
  }
}
