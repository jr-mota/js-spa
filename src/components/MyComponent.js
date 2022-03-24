import BaseComponent from "../../vanilla-spa/BaseComponent.js";

export default class MyComponent extends BaseComponent {
  template = `
    <button class="button">My Component</button>
  `;

  constructor() {
    super();
  }
}
