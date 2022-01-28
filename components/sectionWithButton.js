class sectionWithButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <!-- NON-PARALLAX SECTION 1.5 -->
    <div style="height: 60vh; width: 100%;">
      <div class="rale container _alignCenter" style="padding: 50px;">
        <h3 class="fade-in-1 secondary_text">Why Should Therapy Be So Whatever???<br>
          <br>
          <small class="shepp longfade tertiary_text">right?</small>
        </h3>

        <hr class="hr_tertiary">
      </div>

      <div class="_alignCenter">
        <schedule-button-component></schedule-button-component>
      </div>
      <br>
    </div>
`;
  }
}

customElements.define('section-with-button-component', sectionWithButton);

