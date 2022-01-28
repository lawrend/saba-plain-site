class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <!-- PARALLAX 1-->
    <div class="bg-parallax _alignCenter header" style="background-image: url('assets/images/water_drop.jpg')">
      <div class="-front front-reg brawler">
          <h2>You could use some help
          </h2>

      <br>
      <button class="btn btn2 header-btn">get some</button>
      </div><!--front-->
    </div><!--bg-parallax-->
    `;
  }
}

customElements.define('header-component', Header);
