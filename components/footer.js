class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="footer">
      <div>
        Made with <a href="https://www.beuter.com">Beauter</a>
      </div>
      <div>
        Design by Lawrend
      </div>
    </div>

        `;
  }
}

customElements.define('footer-component', Footer);





