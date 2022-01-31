class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <!-- NAVBAR -->
      <ul class="topnav -fixed" id="myTopnav">
        <li>
        <div id="top-name">
          <a class="brand" href="index.html">
            <strong>Saba Omidvar, LMFT</strong></a>
            </div>
        </li>
        <li>
          <a href="about.html">About</a>
        </li>

        <li class="dropdown" id="treatmentDropdown">

          <a href="javascript:void(0)" onclick="topnav('treatmentDropdown')" class="dropbtn">Treatments</a>
          <div class="dropdown-content">
            <a href="adults.html">Adults</a>
            <a href="children.html">Children</a>
            <a href="couples.html">Couples</a>
            <a href="mediation.html">Mediation</a>
          </div><!-- dropdown-content -->
        </li>

        <li style="float:right;"><a href="#" >Schedule an Appointment</a></li>
        <li class="-icon">
          <a href="javascript:void(0);" onclick="topnav('myTopnav')">☰</a>
        </li>
      </ul>
    `;
  }
}

customElements.define('navbar-component', Navbar);
