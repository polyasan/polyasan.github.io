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
              <i>Payment related info...</i>
            </p>
            <br />
            <div
              class="w3-container w3-content"
              style={{ maxWidth: "800px", minHeight: "500px" }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pay;
