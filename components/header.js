class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <!-- PARALLAX 1-->
    <div class="bg-parallax twenty-view _alignCenter" style="background-image: url('assets/images/beach.jpg')">
      <div class="-front front-reg shepp">
          <h1>Saba Omidvar
            <p>
            <small class="mont">Therapy? Ew.</small>
            </p>
          </h1>
      </div><!--front-->
    </div><!--bg-parallax-->
    `;
  }
}

customElements.define('header-component', Header);
