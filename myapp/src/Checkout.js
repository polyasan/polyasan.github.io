import React from "react";

class Checkout extends React.Component {
  calculateTotal() {
    let subtotal = 0;
    this.props.cart.map((item) => {
      subtotal += item.price;
      return null;
    });
    //this.setState({subtotal:subtotal});
    return subtotal.toFixed(2);
  }
  render() {
    return (
      <div>
        <div class="w3-light-gray" id="checkout">
          <div
            class="w3-container w3-content w3-padding-64"
            style={{ maxWidth: "100%" }}
          >
            <h2 class="w3-wide w3-center">CHECKOUT</h2>
            <p class="w3-opacity w3-center">
              <i>Give your shipping and payment details</i>
            </p>
            <br />
            <div class="w3-container w3-content" style={{ minHeight: "500px" }}>
              <div class="w3-container">
                <div class="w3-half w3-padding-32">
                  <i>Personal details</i>
                  <form class="w3-container">
                    <label>First Name</label>
                    <input class="w3-input" type="text" />
                    <label>Last Name</label>
                    <input class="w3-input" type="text" />
                    <label>e-mail</label>
                    <input class="w3-input" type="text" />
                    <label>Phone</label>
                    <input class="w3-input" type="tel" />
                  </form>
                </div>
                <div class="w3-half w3-padding-32">
                  <i>Shipping details</i>
                  <form class="w3-container">
                    <label>Name</label>
                    <input class="w3-input" type="text" />
                    <label>Address</label>
                    <input class="w3-input" type="text" />
                    <label>City</label>
                    <input class="w3-input" type="text" />
                    <label>Post code</label>
                    <input class="w3-input" type="text" />
                    <label>Country</label>
                    <select id="countries" class="w3-select" name="option">
                      <option value="" disabled selected>
                        Choose your country
                      </option>
                    </select>
                  </form>
                </div>
              </div>
              <div class="w3-container">
                <form class="w3-half">
                  <i>Payment options</i>
                  <p></p>
                  <input
                    id="online"
                    class="w3-radio"
                    type="radio"
                    name="online"
                    value="online"
                    checked=""
                  />
                  <label>Online payment</label>
                  <p>
                    <input
                      id="online"
                      class="w3-radio"
                      type="radio"
                      name="online"
                      value="bank"
                      checked=""
                    />
                    <label>Bank transfer</label>
                  </p>
                </form>
                <div class="w3-half w3-container">
                  <div class="w3-right">
                    <p class="w3-opacity">
                      <i>Total: ${this.calculateTotal()}</i>
                    </p>
                    <a
                      href="#pay"
                      class="w3-button w3-margin-top w3-red"
                      style={{ width: "100%" }}
                      onClick={() => this.props.rPage("pay")}
                    >
                      Pay
                      <i class="fa fa-credit-card" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
