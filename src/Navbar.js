import React from "react";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navState: "" };
    this.onHomeChange = this.onHomeChange.bind(this);
  }
  onHomeChange() {
    if (this.state.navState === "") {
      this.setState({ navState: "w3-show" });
    } else {
      this.setState({ navState: "" });
    }
  }
  render() {
    return (
      <div>
        <div class="w3-top">
          <div class="w3-bar w3-black w3-card">
            <button
              class="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right"
              onClick={this.onHomeChange}
              title="Toggle Navigation Menu"
            >
              <i class="fa fa-bars"></i>
            </button>
            <a
              href="#"
              class="w3-bar-item w3-button w3-padding-large"
              onClick={() => {
                this.props.rPage("main");
              }}
            >
              HOME
            </a>
            <a
              href="#gallery"
              onClick={() => {
                this.props.rPage("main");
              }}
              class="w3-bar-item w3-button w3-padding-large w3-hide-small"
            >
              GALLERY
            </a>
            <a
              href="#triangulum"
              onClick={() => {
                this.props.rPage("main");
              }}
              class="w3-bar-item w3-button w3-padding-large w3-hide-small"
            >
              TRIANGULUM PLATFORM
            </a>
            <a
              href="#accessories"
              onClick={() => {
                this.props.rPage("main");
              }}
              class="w3-bar-item w3-button w3-padding-large w3-hide-small"
            >
              ACCESSORIES
            </a>
            <a
              href="#manual"
              onClick={() => {
                this.props.rPage("main");
              }}
              class="w3-bar-item w3-button w3-padding-large w3-hide-small"
            >
              MANUAL
            </a>
            <a
              href="#contact"
              onClick={() => {
                this.props.rPage("main");
              }}
              class="w3-bar-item w3-button w3-padding-large w3-hide-small"
            >
              CONTACT
            </a>
            <a
              href="#cart"
              onClick={() => {
                this.props.rPage("cart");
              }}
              class="w3-padding-large w3-hover-red w3-hide-small w3-right"
            >
              {this.props.badge ? (
                <span class="w3-badge w3-dark-gray">{this.props.badge}</span>
              ) : (
                <div />
              )}
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div
          id="navDemo"
          className={
            this.state.navState +
            " w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top"
          }
          style={{ marginTop: "46px" }}
        >
          <a
            href="#gallery"
            class="w3-bar-item w3-button w3-padding-large"
            onClick={() => {
              this.onHomeChange();
              this.props.rPage("main");
            }}
          >
            GALLERY
          </a>
          <a
            href="#triangulum"
            class="w3-bar-item w3-button w3-padding-large"
            onClick={() => {
              this.onHomeChange();
              this.props.rPage("main");
            }}
          >
            TRIANGULUM ASTRO
          </a>
          <a
            href="#accessories"
            class="w3-bar-item w3-button w3-padding-large"
            onClick={() => {
              this.onHomeChange();
              this.props.rPage("main");
            }}
          >
            ACCESSORIES
          </a>
          <a
            href="#manual"
            class="w3-bar-item w3-button w3-padding-large"
            onClick={() => {
              this.onHomeChange();
              this.props.rPage("main");
            }}
          >
            MANUAL
          </a>
          <a
            href="#contact"
            class="w3-bar-item w3-button w3-padding-large"
            onClick={() => {
              this.onHomeChange();
              this.props.rPage("main");
            }}
          >
            CONTACT
          </a>
          <a
            href="#cart"
            class="w3-bar-item w3-button w3-padding-large"
            onClick={() => {
              this.onHomeChange();
              this.props.rPage("cart");
            }}
          >
            CART
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
