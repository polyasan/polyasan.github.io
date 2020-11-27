import React from "react";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { subtotal: 0 };
  }

  calculateSubtotal() {
    let subtotal = 0;
    this.props.cart.map((item) => {
      subtotal += item.price;
    });
    //this.setState({subtotal:subtotal});
    return subtotal.toFixed(2);
  }
  render() {
    return (
      <div>
        <div class="w3-light-gray" id="cart">
          <div
            class="w3-container w3-content w3-padding-64"
            style={{ maxWidth: "100%" }}
          >
            <h2 class="w3-wide w3-center">THE SHOPPING CART</h2>
            <p class="w3-opacity w3-center">
              {this.props.cart.length === 0 ? (
                <i>There are no elements in the cart</i>
              ) : (
                <i>Items in your cart</i>
              )}
            </p>
            <br />
            <div
              class="w3-container w3-content"
              style={{ maxWidth: "800px", minHeight: "500px" }}
            >
              <div class="w3-display-right"></div>
              <div class="w3-display-left"></div>
              <ul class="w3-ul w3-light-gray w3-card-4">
                {this.props.cart.map((item, index) => {
                  return (
                    <li class="w3-bar">
                      <span
                        onClick={() => this.props.onRemove(index)}
                        class="w3-bar-item w3-button w3-xlarge w3-right"
                      >
                        &times;
                      </span>
                      <img
                        alt=""
                        src={process.env.PUBLIC_URL + item.image}
                        class="w3-bar-item w3-circle"
                        style={{ width: "85px" }}
                      />
                      <div class="w3-bar-item">
                        <span class="w3-large">{item.name}</span>
                        <br />
                        <span>${item.price}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
              {this.props.cart.length ? (
                <div>
                  <p class="w3-opacity w3-left">
                    <i>Subtotal: ${this.calculateSubtotal()}</i>
                  </p>
                  <a
                    href="#checkout"
                    class="w3-button w3-margin-top w3-red w3-right"
                    onClick={() => this.props.rPage("checkout")}
                  >
                    Go to checkout{" "}
                    <i class="fa fa-credit-card" aria-hidden="true"></i>
                  </a>
                </div>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
