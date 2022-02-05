class ParallaxWithCard2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <!-- PARALLAX 3 NO PIC -->
    <div class="bg-parallax plax3" >
      <div class="front-reg">
        <div class="container">
          <h1 class="secondary_text">She's super fine</h1>
          <h2 class="offwhite_text" >Probably blow your mind</h2>
          <br>
          <div class="flex-row flex-around secondary_text">

            <div class="leftie card  _round opaque-pink" style="width:200px; height:200px">
              <div class="-content">
                <h1 class="_alignCenter shepp">Do not...</h1>
              </div> <!--content-->
            </div> <!--card-->

            <div class="middle card  _round opaque-pink" style="width:200px; height:200px">
              <div class="-content">
                <br>
                <br>
                <h1 class="_alignCenter shepp">...get it...</h1>
              </div> <!--content-->
            </div> <!--card-->

            <div class="rightie card  _round opaque-pink" style="width:200px; height:200px">
              <div class="-content">
                <br>
                <br>
                <br>
                <br>
                <br>
                <h1 class="_alignCenter shepp">...twisted.</h1>
              </div> <!--content-->
            </div> <!--card-->
          </div><!--flex-->
          <br>
          <br>
          <div class="_alignCenter"><button class="btn btn3">book now</button></div>
        </div> <!--container-->
      </div><!--front-->
    </div><!--bg-parallax-->

`;
  }
}

customElements.define('parallax-with-card-2-component', ParallaxWithCard2);

