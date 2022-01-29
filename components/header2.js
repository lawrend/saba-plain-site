class Header2 extends HTMLElement {
  constructor() {
    super();
  }
// to edit comment out both ticks
  connectedCallback() {
    this.innerHTML = `

    <!-- PARALLAX 1-->
    <div class="bg-parallax _alignCenter header2" style="background-image: url('assets/images/water_drop.jpg')">
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

customElements.define('header-2-component', Header2);
