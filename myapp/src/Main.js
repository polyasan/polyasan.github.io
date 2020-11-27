import React from "react";
import Slideshow from "./Slideshow";

class Main extends React.Component {
  render() {
    const platformItem = this.props.items.find((item) => {
      return item.type === "platform";
    });
    return (
      <div
        class="w3-content w3-light-gray"
        style={{ maxWidth: "2000px", marginTop: "46px" }}
      >
        <Slideshow />
        <div
          class="w3-container w3-content w3-center w3-padding-64"
          style={{ maxWidth: "1000px" }}
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
              <img
                alt=""
                src={process.env.PUBLIC_URL + "/FB_IMG_1605350958962.jpg"}
                style={{ width: "90%" }}
              />
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
            style={{ maxWidth: "800px" }}
          >
            <h2 class="w3-wide w3-center">GALLERY</h2>
            <p class="w3-opacity w3-center">
              <i>Experience the infinite</i>
            </p>
            <br />

            <div
              class="w3-row-padding w3-padding-32"
              style={{ margin: "0 -16px" }}
            ></div>
          </div>
        </div>
        <img
          alt=""
          src={process.env.PUBLIC_URL + "/FB_IMG_1605350938474.jpg"}
          class="w3-image w3-greyscale-min"
          style={{ width: "100%" }}
        />
        <div class="w3-black" id="triangulum">
          <div
            class="w3-container w3-content w3-padding-64"
            style={{ maxWidth: "100%", minHeight: "750px" }}
          >
            <h2 class="w3-wide w3-center">TRIANGULUM ASTRO</h2>
            <p class="w3-opacity w3-center">
              <i>Buy the platform here</i>
            </p>
            <br />

            <div class="w3-container w3-content" style={{ maxWidth: "800px" }}>
              <div class="w3-display-container">
                <img
                  alt=""
                  src={process.env.PUBLIC_URL + "/FB_IMG_1605350901029.jpg"}
                  class="w3-hover-opacity"
                  style={{ width: "100%" }}
                />
              </div>
              <button
                class="w3-button w3-margin-top w3-red w3-right"
                onClick={() => {
                  this.props.onAddToCart(platformItem.name);
                }}
              >
                Add to cart <i class="fa fa-shopping-cart"></i>
              </button>
              <p>
                {platformItem.name}
                <br />
                <b>${platformItem.price}</b>
              </p>
            </div>
          </div>
        </div>
        <div class="w3-black" id="accessories">
          <div
            class="w3-container w3-content w3-padding-64"
            style={{ maxWidth: "100%", minHeight: "750px" }}
          >
            <h2 class="w3-wide w3-center">ACCESSORIES</h2>
            <p class="w3-opacity w3-center">
              <i>Buy the accessories here</i>
            </p>
            <br />

            <div
              class="w3-row-padding w3-padding-32"
              style={{ margin: "0 -16px" }}
            >
              {this.props.items.map((item) => {
                if (item.type === "accessories") {
                  return (
                    <div class="w3-third w3-margin-bottom">
                      <div class="w3-display-container">
                        <img
                          alt=""
                          src={process.env.PUBLIC_URL + item.image}
                          class="w3-hover-opacity"
                          style={{ width: "100%" }}
                        />
                      </div>
                      <button
                        class="w3-button w3-margin-top w3-red w3-right"
                        onClick={() => {
                          this.props.onAddToCart(item.name);
                        }}
                      >
                        Add to cart <i class="fa fa-shopping-cart"></i>
                      </button>
                      <p>
                        {item.name}
                        <br />
                        <b>${item.price}</b>
                      </p>
                    </div>
                  );
                } else {
                  return <div />;
                }
              })}
            </div>
          </div>
        </div>
        <div
          class="w3-container w3-content w3-padding-64"
          style={{ maxWidth: "800px", minHeight: "700px" }}
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
                <a href={process.env.PUBLIC_URL + "/pdf/lm386.pdf"}>
                  <i
                    class="fa fa-book"
                    style={{ fontSize: "60px" }}
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
                <a href={process.env.PUBLIC_URL + "/pdf/lm386.pdf"}>
                  <i
                    class="fa fa-book"
                    style={{ fontSize: "60px" }}
                    aria-hidden="true"
                  ></i>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div
          class="w3-container w3-content w3-padding-64"
          style={{ maxWidth: "800px", minHeight: "720px" }}
          id="contact"
        >
          <h2 class="w3-wide w3-center">CONTACT</h2>
          <p class="w3-opacity w3-center">
            <i>You have a question? Feel free to mail us!</i>
          </p>
          <div class="w3-row w3-padding-32">
            <div class="w3-col m6 w3-large w3-margin-bottom">
              <i class="fa fa-map-marker" style={{ width: "30px" }}></i>{" "}
              Budapest, HU
              <br />
              <i class="fa fa-envelope" style={{ width: "30px" }}></i>
              <img
                alt=""
                src={process.env.PUBLIC_URL + "/mail.png"}
                class="w3-image w3-greyscale-min"
                style={{ height: "24px" }}
              />
              <br />
              <i
                class="fa fa-facebook-square"
                style={{ width: "30px" }}
                aria-hidden="true"
              ></i>
              <a href="https://www.facebook.com/groups/764497804293915/?ref=share">
                www.facebook.com/triangulumastro
              </a>
              <br />
            </div>
            <div class="w3-col m6">
              <form action="/action_page.php" target="_blank">
                <div
                  class="w3-row-padding"
                  style={{ margin: "0 -16px 8px -16px" }}
                >
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
                  style={{ resize: "none" }}
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
    );
  }
}

export default Main;
