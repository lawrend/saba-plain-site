class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="footer">
      <div>
      <span>&copy;</span> Copyright 2022 Saba Omidvar
      </div>
      <div>
        Design by Lawrend
      </div>
    </div>

        `;
  }
}

customElements.define('footer-component', Footer);





