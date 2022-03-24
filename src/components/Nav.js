import BaseComponent from "../../vanilla-spa/BaseComponent.js";

export default class nav extends BaseComponent {
  constructor() {
    super();

    this._template = `
      <nav align="center">
        <a href="/home">
          Home
        </a>
        |
        <a href="/about">
          About
        </a>
        |
        <a href="/news">
          News
        </a>
      </nav>
    `;
  }
}
