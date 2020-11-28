import React from "react";

class Pay extends React.Component {
  render() {
    return (
      <div>
        <div class="w3-light-gray" id="pay">
          <div
            class="w3-container w3-content w3-padding-64"
            style={{ maxWidth: "100%" }}
          >
            <h2 class="w3-wide w3-center">PAYMENT</h2>
            <p class="w3-opacity w3-center">
              <i>Your order is successful</i>
            </p>
            <br />
            <div
              class="w3-container w3-content"
              style={{ maxWidth: "800px", minHeight: "500px" }}
            >
              <p class="w3-justify">
            You will receive an e-mail soom. Please follow te instructions written there...
          </p>
              <div class="w3-half w3-container"></div>
              <div class="w3-half w3-container">
                <div class="w3-right">
                  <a
                    href="#"
                    class="w3-button w3-margin-top w3-red"
                    style={{ width: "100%" }}
                    onClick={() => this.props.rPage("main")}
                  >
                    Go to home
                    <i class="fa fa-credit-card" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pay;
