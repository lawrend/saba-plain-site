class scheduleButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<!-- ScheduleOnce button START -->
<button class="btn btn1" id="SOIBTN_DouglasLawrence" onclick='var soqueryparam = "https://go.oncehub.com//DouglasLawrence?&bt=1"; if (window.location.href.indexOf("?") > 0) {   soqueryparam += "&"+window.location.href.slice(window.location.href.indexOf("?") + 1);}window.open(soqueryparam)' >book it</button>

<!-- ScheduleOnce button END -->
`;
  }
}

customElements.define('schedule-button-component', scheduleButton);

