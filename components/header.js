class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <!-- PARALLAX 1-->
    <div class="bg-parallax _alignCenter header" style="background-image: url('assets/images/beach.jpg')">
      <div class="-front front-reg brawler">
          <h2>Therapy for when you are like, ew that's gross
          </h2>

      <br>
      <button class="btn btn2 header-btn">get some</button>
      </div><!--front-->
    </div><!--bg-parallax-->
    `;
  }
}

customElements.define('header-component', Header);
