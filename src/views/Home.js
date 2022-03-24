import BaseView from "../../vanilla-spa/BaseView.js";

export default class Home extends BaseView {
  constructor(args) {
    super(args);

    this.template = `
      <h1>
        ${this.components[0].getTemplate()}
      </h1>
    `;
  }
}
