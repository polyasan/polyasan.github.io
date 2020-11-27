import React from "react";
import "./App.css";
import Main from "./Main";
import Navbar from "./Navbar";
import Cart from "./Cart";
import Pay from "./Pay";
import Checkout from "./Checkout";
import Footer from "./Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actualPage: "main",
      cart: [],
      items: [
        { image: "/tracker1.jpg", name: "Remote", price: 19.99, type:"accessories" },
        { image: "/tracker2.jpg", name: "Box", price: 139.99,type:"accessories" },
        { image: "/tracker3.jpg", name: "Power supply", price: 29.99,type:"accessories" },
        {
          image: "/FB_IMG_1605350901029.jpg",
          name: "Trinagulum platform",
          price: 2299.99,
          type:"platform"
        },
      ],
    };
    this.rPage = this.rPage.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }
  rPage(pageName) {
    this.setState({ actualPage: pageName });
  }
  addToCart(itemName) {
    const newItem = this.state.items.find((item) => {
      return item.name === itemName;
    });
    let cart = [...this.state.cart];
    cart.push(newItem);
    this.setState({ ...this.state, cart: cart });
  }
  onRemove(index) {
    let newCart = [...this.state.cart];
    newCart.splice(index, 1);
    this.setState({ ...this.state, cart: newCart });
  }
  render() {
    return (
      <div>
        <Navbar badge={this.state.cart.length} rPage={this.rPage} />
        {
          {
            main: (
              <Main items={this.state.items} onAddToCart={this.addToCart} />
            ),
            pay: <Pay rPage={this.rPage}/>,
            cart: <Cart cart={this.state.cart} onRemove={this.onRemove} rPage={this.rPage}/>,
            checkout: <Checkout cart={this.state.cart} rPage={this.rPage}/>,
          }[this.state.actualPage]
        }
        <Footer />
      </div>
    );
  }
}

export default App;
