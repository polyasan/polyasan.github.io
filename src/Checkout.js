import React from "react";
import countries from "./countries";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getDefaultState();
    this.onTextChange = this.onTextChange.bind(this);
    this.onCheck = this.onCheck.bind(this);
    this.onPaymentChecked = this.onPaymentChecked.bind(this);
    this.onGoHome = this.onGoHome.bind(this);
  }
  getDefaultState(){
    return {
      checked: "online",
      paymentMethod: false,
      billingAddress: "",
      billingFirstName: "",
      billingLastName: "",
      billingCompany: "",
      billingCity: "",
      billingPostCode: "",
      billingCountry: "",
      billingPhone: "",
      shippingAddress: "",
      shippingFirstName: "",
      shippingLastName: "",
      shippingCompany: "",
      shippingCity: "",
      shippingPostCode: "",
      shippingCountry: "",
      shippingPhone: "",
      shippingNote: "",
    };
  }
  validateValue(name, value) {
    //validate post code
    if (name.indexOf("PostCode") !== -1) {
      if (value.match(/^[0-9]+$/) != null) {
        return value;
      } else {
        return value.substring(0, value.length - 1);
      }
    } else if (name.indexOf("Phone") !== -1) {
      if (value.substring(0, 1) === "+") {
        if (
          value.substring(1, value.length).match(/^[0-9]+$/) != null ||
          value.length === 1
        ) {
          return value;
        }
        return value.substring(0, value.length - 1);
      } else if (value.match(/^[0-9]+$/) != null) {
        return value;
      } else {
        return value.substring(0, value.length - 1);
      }
    } else {
      return value;
    }
  }
  validateRequiredFields(){
    
  }
  onTextChange(event) {
    let senderName = event.target.name;
    let senderValue = event.target.value;
    senderValue = this.validateValue(senderName, senderValue);
    let tState = { ...this.state };
    tState[senderName] = senderValue;
    if (this.state.checked && senderName.indexOf("billing") !== -1) {
      senderName = senderName.replace("billing", "shipping");
      tState[senderName] = senderValue;
    }
    this.setState(tState);
  }
  onPaymentChecked(event) {
    this.setState({ ...this.state, checked: event.target.value });
  }
  onCheck(event) {
    const checkState = event.target.checked;
    this.setState({ checked: checkState });
    if (checkState) {
    }
  }
  calculateTotal() {
    let subtotal = 0;
    this.props.cart.map((item) => {
      subtotal += item.price;
      return null;
    });
    return subtotal.toFixed(2);
  }
  onGoHome() {
    this.props.onOrder(this.state);
    this.setState(this.getDefaultState());
    this.props.rPage("pay");
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
              <i>Give your billing and shipping details</i>
            </p>
            <br />
            <div class="w3-container w3-content" style={{ minHeight: "500px" }}>
              <div class="w3-container">
                <div class="w3-half w3-padding-32">
                  <i>Billing details</i>
                  <form class="w3-container">
                    <p style={{ height: "30px" }}></p>
                    <label>Company name</label>
                    <input
                      name="billingCompany"
                      value={this.state.billingCompany}
                      onChange={this.onTextChange}
                      class="w3-input"
                      type="text"
                    />
                    <label>First Name</label>
                    <input
                      name="billingFirstName"
                      value={this.state.billingFirstName}
                      onChange={this.onTextChange}
                      class="w3-input"
                      type="text"
                    />
                    <label>Last Name</label>
                    <input
                      name="billingLastName"
                      value={this.state.billingLastName}
                      onChange={this.onTextChange}
                      class="w3-input"
                      type="text"
                    />
                    <label>Address</label>
                    <input
                      name="billingAddress"
                      value={this.state.billingAddress}
                      onChange={this.onTextChange}
                      class="w3-input"
                      type="text"
                    />
                    <label>City</label>
                    <input
                      name="billingCity"
                      value={this.state.billingCity}
                      onChange={this.onTextChange}
                      class="w3-input"
                      type="text"
                    />
                    <label>Post code</label>
                    <input
                      name="billingPostCode"
                      value={this.state.billingPostCode}
                      onChange={this.onTextChange}
                      class="w3-input"
                      type="text"
                    />
                    <label>Country</label>
                    <select id="countries" class="w3-select" name="option">
                      <option value="" disabled selected>
                        Choose your country
                      </option>
                      {countries.map((item) => {
                        return <option value="">{item}</option>;
                      })}
                    </select>
                    <label>Phone</label>
                    <input
                      name="billingPhone"
                      value={this.state.billingPhone}
                      onChange={this.onTextChange}
                      class="w3-input"
                      type="tel"
                    />
                    <label>e-mail</label>
                    <input
                      name="billingEmail"
                      value={this.state.billingEmail}
                      onChange={this.onTextChange}
                      class="w3-input"
                      type="text"
                    />
                  </form>
                </div>
                <div class="w3-half w3-padding-32">
                  <i>Shipping details</i>
                  <form class="w3-container" onSubmit={this.props.onSubmit}>
                    <p>
                      <input
                        class="w3-check"
                        type="checkbox"
                        onChange={this.onCheck}
                        checked={this.state.checked}
                      />
                      <label> Same as billing address</label>
                    </p>
                    <label>Company name</label>
                    <input
                      name="shippingCompany"
                      class="w3-input"
                      value={this.state.shippingCompany}
                      onChange={this.onTextChange}
                      type="text"
                    />
                    <label>First name</label>
                    <input
                      name="shippingFirstName"
                      class="w3-input"
                      value={this.state.shippingFirstName}
                      onChange={this.onTextChange}
                      type="text"
                    />
                    <label>Last name</label>
                    <input
                      name="shippingLastName"
                      class="w3-input"
                      value={this.state.shippingLastName}
                      onChange={this.onTextChange}
                      type="text"
                    />
                    <label>Address</label>
                    <input
                      name="shippingAddress"
                      class="w3-input"
                      value={this.state.shippingAddress}
                      onChange={this.onTextChange}
                      type="text"
                    />
                    <label>City</label>
                    <input
                      name="shippingCity"
                      class="w3-input"
                      value={this.state.shippingCity}
                      onChange={this.onTextChange}
                      type="text"
                    />
                    <label>Post code</label>
                    <input
                      name="shippingPostCode"
                      class="w3-input"
                      value={this.state.shippingPostCode}
                      onChange={this.onTextChange}
                      type="text"
                    />
                    <label>Country</label>
                    <select id="countries" class="w3-select" name="option">
                      <option value="" disabled selected>
                        Choose your country
                      </option>
                      {countries.map((item) => {
                        return <option value="">{item}</option>;
                      })}
                    </select>
                    <label>Phone</label>
                    <input
                      name="shippingPhone"
                      value={this.state.shippingPhone}
                      onChange={this.onTextChange}
                      class="w3-input"
                      type="tel"
                    />
                    <label>Note</label>
                    <input
                      name="shippingNote"
                      class="w3-input"
                      value={this.state.shippingNote}
                      onChange={this.onTextChange}
                      type="text"
                    />
                  </form>
                </div>
              </div>
              <div class="w3-container">
                <form class="w3-half">
                  <i>Payment options</i>
                  <p></p>
                  <input
                    class="w3-radio"
                    type="radio"
                    name="online"
                    value="online"
                    checked={this.state.checked === "online"}
                    onChange={this.onPaymentChecked}
                  />
                  <label> Online payment</label>
                  <p>
                    <input
                      class="w3-radio"
                      type="radio"
                      name="online"
                      value="bank"
                      checked={this.state.checked === "bank"}
                      onChange={this.onPaymentChecked}
                    />
                    <label> Bank transfer</label>
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
                      onClick={this.onGoHome}
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
