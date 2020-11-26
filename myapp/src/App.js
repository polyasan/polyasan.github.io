import "./App.css";
import Slideshow from "./Slideshow";

function App() {
  return (
    <div>
      <div class="w3-top">
        <div class="w3-bar w3-black w3-card">
          <a
            class="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right"
            onclick="myFunction()"
            title="Toggle Navigation Menu"
          >
            <i class="fa fa-bars"></i>
          </a>
          <a href="#home" class="w3-bar-item w3-button w3-padding-large">
            HOME
          </a>
          <a
            href="#gallery"
            class="w3-bar-item w3-button w3-padding-large w3-hide-small"
          >
            GALLERY
          </a>
          <a
            href="#triangulum"
            class="w3-bar-item w3-button w3-padding-large w3-hide-small"
          >
            TRIANGULUM ASTRO
          </a>
          <a
            href="#accessories"
            class="w3-bar-item w3-button w3-padding-large w3-hide-small"
          >
            ACCESSORIES
          </a>
          <a
            href="#manual"
            class="w3-bar-item w3-button w3-padding-large w3-hide-small"
          >
            MANUAL
          </a>
          <a
            href="#contact"
            class="w3-bar-item w3-button w3-padding-large w3-hide-small"
          >
            CONTACT
          </a>
          <a
            href="cart.html"
            class="w3-padding-large w3-hover-red w3-hide-small w3-right"
          >
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div
        id="navDemo"
        class="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top"
        style={{marginTop: "46px"}}
      >
        <a
          href="#gallery"
          class="w3-bar-item w3-button w3-padding-large"
          onclick="myFunction()"
        >
          GALLERY
        </a>
        <a
          href="#triangulum"
          class="w3-bar-item w3-button w3-padding-large"
          onclick="myFunction()"
        >
          TRIANGULUM ASTRO
        </a>
        <a
          href="#accessories"
          class="w3-bar-item w3-button w3-padding-large"
          onclick="myFunction()"
        >
          ACCESSORIES
        </a>
        <a
          href="#manual"
          class="w3-bar-item w3-button w3-padding-large"
          onclick="myFunction()"
        >
          MANUAL
        </a>
        <a
          href="#contact"
          class="w3-bar-item w3-button w3-padding-large"
          onclick="myFunction()"
        >
          CONTACT
        </a>
        <a
          href="/cart.html"
          class="w3-bar-item w3-button w3-padding-large"
          onclick="myFunction()"
        >
          CART
        </a>
      </div>
      <div
        class="w3-content w3-light-gray"
        style={{maxWidth: "2000px", marginTop: "46px"}}
      >
        <Slideshow/>
        <div class="mySlides w3-display-container w3-center">
          <img alt="" src={process.env.PUBLIC_URL+"/FB_IMG_1605350897091.jpg"} style={{width: "100%"}} />
          <div class="w3-display-topmiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
            <h3>Triangulum Astro</h3>
            <p>
              <b>Catch the moment</b>
            </p>
          </div>
        </div>
        <div class="mySlides w3-display-container w3-center">
          <img alt="" src={process.env.PUBLIC_URL+"/FB_IMG_1605350901029.jpg"} style={{width: "100%"}} />
          <div class="w3-display-topmiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
            <h3>Look at the sky</h3>
            <p>
              <b>Through the atmosphere</b>
            </p>
          </div>
        </div>
        <div class="mySlides w3-display-container w3-center">
          <img alt="" src={process.env.PUBLIC_URL+"/FB_IMG_1605350904084.jpg"} style={{width: "100%"}} />
          <div class="w3-display-topmiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
            <h3>Get to know the universe</h3>
            <p>
              <b>And see unbelivable distances</b>
            </p>
          </div>
        </div>
        <div
          class="w3-container w3-content w3-center w3-padding-64"
          style={{maxWidth: "1000px"}}
          id="home"
        >
          <h2 class="w3-wide">THE TRIANGULUM ASTRO</h2>
          <p class="w3-opacity">
            <i>Designed for the curiosity</i>
          </p>
          <p class="w3-justify">
            We have created a fictional band website. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <div class="w3-row w3-padding-32">
            <div class="w3-half">
              <iframe
                title="yt1"
                width={300}
                height={225}
                src="https://www.youtube.com/embed/hrTpNkVYYAU"
              ></iframe>
            </div>
            <div class="w3-half">
              <iframe
              title="yt2"
                width="300"
                height="225"
                src="https://youtube.com/embed/hrTpNkVYYAU"
              ></iframe>
            </div>
          </div>
          <div class="w3-row w3-padding-16">
            <div class="w3-half w3-padding-16">
              <img alt="" src={process.env.PUBLIC_URL+"/FB_IMG_1605350958962.jpg"} style={{width: "90%"}} />
            </div>
            <div class="w3-half">
              <p class="w3-opacity">
                <i>Lorem ipsum</i>
              </p>
              <p class="w3-justify">
                We have created a fictional band website. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <div class="w3-black" id="gallery">
          <div
            class="w3-container w3-content w3-padding-64"
            style={{maxWidth: "800px"}}
          >
            <h2 class="w3-wide w3-center">GALLERY</h2>
            <p class="w3-opacity w3-center">
              <i>Experience the infinite</i>
            </p>
            <br />

            <div
              class="w3-row-padding w3-padding-32"
              style={{margin: "0 -16px"}}
            ></div>
          </div>
        </div>
        <img alt=""
          src={process.env.PUBLIC_URL+"/FB_IMG_1605350938474.jpg"}
          class="w3-image w3-greyscale-min"
          style={{width: "100%"}}
        />
        <div class="w3-black" id="triangulum">
          <div
            class="w3-container w3-content w3-padding-64"
            style={{maxWidth: "100%", minHeight: "750px"}}
          >
            <h2 class="w3-wide w3-center">TRIANGULUM ASTRO</h2>
            <br />

            <div class="w3-container w3-content" style={{maxWidth: "800px"}}>
              <div class="w3-display-container">
                <img alt=""
                  src={process.env.PUBLIC_URL+"/FB_IMG_1605350901029.jpg"}
                  class="w3-hover-opacity"
                  style={{width: "100%"}}
                />
              </div>
              <button class="w3-button w3-margin-top w3-red w3-right">
                Add to cart <i class="fa fa-shopping-cart"></i>
              </button>
              <p>
                Trinagulum astro
                <br />
                <b>$1999.99</b>
              </p>
            </div>
          </div>
        </div>
        <div class="w3-black" id="accessories">
          <div
            class="w3-container w3-content w3-padding-64"
            style={{maxWidth: "100%", minHeight: "750px"}}
          >
            <h2 class="w3-wide w3-center">ACCESSORIES</h2>
            <p class="w3-opacity w3-center">
              <i>Buy the accessories here</i>
            </p>
            <br />

            <div class="w3-row-padding w3-padding-32" style={{margin: "0 -16px"}}>
              <div class="w3-third w3-margin-bottom">
                <div class="w3-display-container">
                  <img alt=""
                    src={process.env.PUBLIC_URL+"/tracker1.jpg"}
                    class="w3-hover-opacity"
                    style={{width: "100%"}}
                  />
                </div>
                <button class="w3-button w3-margin-top w3-red w3-right">
                  Add to cart <i class="fa fa-shopping-cart"></i>
                </button>
                <p>
                  Remote controller
                  <br />
                  <b>$19.99</b>
                </p>
              </div>
              <div class="w3-third w3-margin-bottom">
                <div class="w3-display-container">
                  <img
                    alt=""
                    src={process.env.PUBLIC_URL+"/tracker2.jpg"}
                    class="w3-hover-opacity"
                    style={{width: "100%"}}
                  />
                </div>
                <button class="w3-button w3-margin-top w3-red w3-right">
                  Add to cart <i class="fa fa-shopping-cart"></i>
                </button>
                <p>
                  Power supply
                  <br />
                  <b>$19.99</b>
                </p>
              </div>
              <div class="w3-third w3-margin-bottom">
                <div class="w3-display-container">
                  <img
                  alt=""
                    src={process.env.PUBLIC_URL+"/tracker3.jpg"}
                    class="w3-hover-opacity"
                    style={{width: "100%"}}
                  />
                </div>
                <button class="w3-button w3-margin-top w3-red w3-right">
                  Add to cart <i class="fa fa-shopping-cart"></i>
                </button>
                <p>
                  Transfer box
                  <br />
                  <b>$19.99</b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="w3-container w3-content w3-padding-64"
          style={{maxWidth: "800px", minHeight: "700px"}}
          id="manual"
        >
          <h2 class="w3-wide w3-center">MANUAL</h2>
          <p class="w3-opacity w3-center">
            <i>Download the user manual here!</i>
          </p>
          <div class="w3-container w3-padding-32">
            <div class="w3-half">
              <p class="w3-center">
                <i>English</i>
              </p>
              <p class="w3-center w3-hover-red">
                <a href="pdf/lm386.pdf">
                  <i
                    class="fa fa-book"
                    style={{fontSize: "60px"}}
                    aria-hidden="true"
                  ></i>
                </a>
              </p>
            </div>
            <div class="w3-half">
              <p class="w3-center">
                <i>German</i>
              </p>
              <p class="w3-center w3-hover-red">
                <a href="pdf/lm386.pdf">
                  <i
                    class="fa fa-book"
                    style={{fontSize: "60px"}}
                    aria-hidden="true"
                  ></i>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div
          class="w3-container w3-content w3-padding-64"
          style={{maxWidth: "800px", minHeight: "720px"}}
          id="contact"
        >
          <h2 class="w3-wide w3-center">CONTACT</h2>
          <p class="w3-opacity w3-center">
            <i>You have a question? Feel free to mail us!</i>
          </p>
          <div class="w3-row w3-padding-32">
            <div class="w3-col m6 w3-large w3-margin-bottom">
              <i class="fa fa-map-marker" style={{width: "30px"}}></i> Budapest, HU
              <br />
              <i class="fa fa-envelope" style={{width: "30px"}}></i>
              <img
              alt=""
                src={process.env.PUBLIC_URL+"/mail.png"}
                class="w3-image w3-greyscale-min"
                style={{height: "24px"}}
              />
              <br />
              <i
                class="fa fa-facebook-square"
                style={{width: "30px"}}
                aria-hidden="true"
              ></i>
              <a href="https://www.facebook.com/groups/764497804293915/?ref=share">
                www.facebook.com/triangulumastro
              </a>
              <br />
            </div>
            <div class="w3-col m6">
              <form action="/action_page.php" target="_blank">
                <div class="w3-row-padding" style={{margin: "0 -16px 8px -16px"}}>
                  <div class="w3-half">
                    <input
                      class="w3-input w3-border"
                      type="text"
                      placeholder="Name"
                      required
                      name="Name"
                    />
                  </div>
                  <div class="w3-half">
                    <input
                      class="w3-input w3-border"
                      type="text"
                      placeholder="Email"
                      required
                      name="Email"
                    />
                  </div>
                </div>
                <textarea
                  class="w3-input w3-border"
                  style={{resize: "none"}}
                  rows="10"
                  placeholder="Message"
                  required
                  name="Message"
                ></textarea>
                <button
                  class="w3-button w3-red w3-section w3-right"
                  type="submit"
                >
                  SEND
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer class="w3-container w3-padding-64 w3-center w3-opacity w3-light-grey w3-xlarge">
        <p class="w3-medium">
          Powered by
          <a href="#bulatko" target="_blank">
            Laszlo Bulatko
          </a>
        </p>
        <div class="payment_methods">
          <img
            src="//cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/amazon-92e856f82cae5a564cd0f70457f11af4d58fa037cf6e5ab7adf76f6fd3b9cafe.svg"
            alt="Amazon payments"
          />
          <img
            src="//cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/american_express-2264c9b8b57b23b0b0831827e90cd7bcda2836adc42a912ebedf545dead35b20.svg"
            alt="American express"
          />
          <img
            src="//cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/apple_pay-f6db0077dc7c325b436ecbdcf254239100b35b70b1663bc7523d7c424901fa09.svg"
            alt="Apple pay"
          />
          <img
            src="//cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/diners_club-16436b9fb6dd9060edb51f1c7c44e23941e544ad798282d6aef1604319562fba.svg"
            alt="Diners club"
          />
          <img
            src="//cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/discover-8265cfcac046637b87df7718c1436f6a1e054de3fbbb73c2ae82db1332879ba5.svg"
            alt="Discover"
          />
          <img
            src="//cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/jcb-ab0f5a1739704f1ab039f19ac8c28895af5c39a3f54ee9b748ea051986b0bd36.svg"
            alt="Jcb"
          />
          <img
            src="//cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1.svg"
            alt="Master"
          />
          <img
            src="//cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/paypal-49e4c1e03244b6d2de0d270ca0d22dd15da6e92cc7266e93eb43762df5aa355d.svg"
            alt="Paypal"
          />
          <img
            src="//cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/venmo-e46496b4036966108664ea6a65bfeddd373275087df5f94cc3e5564fdb493eb0.svg"
            alt="Venmo"
          />
          <img
            src="//cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg"
            alt="Visa"
          />
        </div>
      </footer>
    </div>
  );
}

export default App;
