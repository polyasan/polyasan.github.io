import cvData from "./data";
import Block from "./block";
import Footer from "./Footer";
import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("w3-teal");
  const [textColor, setTextColor] = useState("w3-text-teal");
  return (
    <div>
      <div className="w3-content w3-margin-top" style={{ maxWidth: "1400px" }}>
        <div className="w3-row-padding">
          <div className="w3-third">
            <div className="w3-white w3-text-grey w3-card-4">
              <div className="w3-display-container">
                <img
                  className="w3-circle"
                  src={process.env.PUBLIC_URL + "profile.png"}
                  style={{
                    width: "50%",
                    marginLeft: "auto",
                    paddingTop: "10px",
                    marginRight: "auto",
                    display: "block",
                  }}
                  alt="Avatar"
                />
                <div className="w3-display-middleleft w3-container w3-text-theme">
                  <h2>Sandor Polyak</h2>
                </div>
              </div>
              <div className="w3-container">
                <p>
                  <i
                    className={`fa fa-briefcase fa-fw w3-margin-right w3-large ${textColor}`}
                  ></i>
                  Electrical engineer
                </p>
                <p>
                  <i
                    className={`fa fa-home fa-fw w3-margin-right w3-large ${textColor}`}
                  ></i>
                  Budapest, HU
                </p>
                <p>
                  <i
                    className={`fa fa-envelope fa-fw w3-margin-right w3-large ${textColor}`}
                  ></i>
                  polyasan@gmail.com
                </p>
                <p>
                  <i
                    className={`fa fa-phone fa-fw w3-margin-right w3-large ${textColor}`}
                  ></i>
                  +36 20 318 8166
                </p>
                <hr />
                <p className="w3-large">
                  <b>
                    <i
                      className={`fa fa-asterisk fa-fw w3-margin-right ${textColor}`}
                    ></i>
                    Skills
                  </b>
                </p>
                <p>Adobe Photoshop</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                  <div
                    className="w3-container w3-center w3-round-xlarge w3-teal"
                    style={{ width: "90%" }}
                  >
                    90%
                  </div>
                </div>
                <p>Photography</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                  <div
                    className="w3-container w3-center w3-round-xlarge w3-teal"
                    style={{ width: "80%" }}
                  >
                    <div className="w3-center w3-text-white">80%</div>
                  </div>
                </div>
                <p>Illustrator</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                  <div
                    className="w3-container w3-center w3-round-xlarge w3-teal"
                    style={{ width: "75%" }}
                  >
                    75%
                  </div>
                </div>
                <p>Media</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                  <div
                    className="w3-container w3-center w3-round-xlarge w3-teal"
                    style={{ width: "50%" }}
                  >
                    50%
                  </div>
                </div>
                <br />
                <p className="w3-large w3-text-theme">
                  <b>
                    <i
                      className={`fa fa-globe fa-fw w3-margin-right ${textColor}`}
                    ></i>
                    Languages
                  </b>
                </p>
                <h5 className="w3-opacity">
                  <b>English</b>
                </h5>
                <p class="w3-text-dark-gray">
                  Good command, good working knowledge
                </p>
                <h5 className="w3-opacity">
                  <b>Hungarian</b>
                </h5>
                <p class="w3-text-dark-gray">Native</p>
                <br />
              </div>
            </div>
            <br />
          </div>
          <div className="w3-twothird">
            <div className="w3-container w3-card w3-white w3-margin-bottom">
              <h2 className="w3-text-grey w3-padding-16">
                <i
                  className={`fa fa-suitcase fa-fw w3-margin-right w3-xxlarge ${textColor}`}
                ></i>
                Work Experience
              </h2>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Front End Developer / w3schools.com</b>
                </h5>
                <h6 className={textColor}>
                  <i className="fa fa-calendar fa-fw w3-margin-right"></i>Jan
                  2015 -{" "}
                  <span className="w3-tag w3-teal w3-round">Current</span>
                </h6>
                <p>
                  Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel
                  in deserunt aspernatur est reprehenderit sunt hic. Nulla
                  tempora soluta ea et odio, unde doloremque repellendus iure,
                  iste.
                </p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Web Developer / something.com</b>
                </h5>
                <h6 className={textColor}>
                  <i className="fa fa-calendar fa-fw w3-margin-right"></i>Mar
                  2012 - Dec 2014
                </h6>
                <p>
                  Consectetur adipisicing elit. Praesentium magnam consectetur
                  vel in deserunt aspernatur est reprehenderit sunt hic. Nulla
                  tempora soluta ea et odio, unde doloremque repellendus iure,
                  iste.
                </p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Graphic Designer / designsomething.com</b>
                </h5>
                <h6 className={textColor}>
                  <i className="fa fa-calendar fa-fw w3-margin-right"></i>Jun
                  2010 - Mar 2012
                </h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </p>
                <br />
              </div>
            </div>
            <div className="w3-container w3-card w3-white">
              <h2 className="w3-text-grey w3-padding-16">
                <i
                  className={`fa fa-certificate fa-fw w3-margin-right w3-xxlarge ${textColor}`}
                ></i>
                Education
              </h2>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Budapest University of Technology and Economics</b>
                </h5>
                <h6 className={textColor}>
                  <i className="fa fa-calendar fa-fw w3-margin-right"></i>2009 -
                  2016
                </h6>
                <p>
                  Bachelor Degree
                  <br />
                  Electrical engineer, embedded systems
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="w3-container w3-teal w3-center w3-margin-top">
        <p>Chose a color</p>
        <span class="dot w3-pale-yellow"></span>
        <span class="dot w3-light-blue"></span>
        <span class="dot w3-blue"></span>
        <span class="dot w3-gray"></span>
        <p>
          Powered by{" "}
          <a href="polyasan.github.io" target="_blank">
            polyasan
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
