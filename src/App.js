import cvData from "./data";
import "./App.css";
import React, { useState } from "react";
import WorkExperience from "./work_ex";
import Education from "./education";
import data from "./data";

function App() {
  const [color, setColor] = useState("w3-teal");
  const [textColor, setTextColor] = useState("w3-text-teal");
  const weData = cvData.find((item) => {
    return item.title === "Work experience";
  });
  const cvSkill = cvData.find((item) => {
    return item.title === "Skills and competences";
  });
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
                {cvSkill.blocks.map((item) => {
                  console.log(item);
                  return (
                    <div>
                      {item.map((sl) => {
                        return (
                          <>
                            <h5 className="w3-opacity">
                              <b>{sl.label}</b>
                            </h5>
                            <p class="w3-text-dark-gray">
                              {Array.isArray(sl.value)
                                ? sl.value.map((item) => {
                                    return (
                                      <>
                                        {item}
                                        <br />
                                      </>
                                    );
                                  })
                                : sl.value}
                            </p>
                          </>
                        );
                      })}
                    </div>
                  );
                })}
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
            <WorkExperience textColor={textColor} color={color} data={weData} />
            <Education textColor={textColor} color={color} />
          </div>
        </div>
      </div>
      <footer className="w3-container w3-teal w3-center w3-margin-top">
        <p>Chose a color</p>
        <span className="dot w3-pale-yellow"></span>
        <span className="dot w3-light-blue"></span>
        <span className="dot w3-blue"></span>
        <span className="dot w3-gray"></span>
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
