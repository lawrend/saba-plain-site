class sectionWithButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
`;
  }
}

customElements.define('section-with-button-component', sectionWithButton);

