class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <!-- NAVBAR -->
    <div>
      <ul class="topnav -fixed" id="myTopnav">
        <li>
          <a id="top-name" class="brand" href="index.html">
            Saba Omidvar</a>
        </li>
        <li>
          <a href="about.html">About</a>
        </li>

        <li class="dropdown" id="treatmentDropdown">

          <a href="javascript:void(0)" onclick="topnav('treatmentDropdown')" class="dropbtn">Treatments</a>
          <div class="dropdown-content">
            <a href="#">Adults</a>
            <a href="#">Teens</a>
            <a href="#">Couples</a>
          </div>
        </li>

        <li style="float:right;"><a href="#" >Schedule an Appointment</a></li>
        <li class="-icon">
          <a href="javascript:void(0);" onclick="topnav('myTopnav')">☰</a>
        </li>
      </ul>

    </div>

    `;
  }
}

customElements.define('header-component', Header);
