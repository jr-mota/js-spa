export default class BaseComponent extends HTMLElement {
  constructor() {
    super();
  }

  preload(cb) {
    return new Promise((resolve, reject) => {});
  }
}
