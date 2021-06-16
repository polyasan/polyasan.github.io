import cvData from "./data";
import "./App.css";
import React, { useState } from "react";
import WorkExperience from "./work_ex";
import Education from "./education";

function App() {
  const [state, setState] = useState({
    color: "w3-teal",
    textColor: "w3-text-teal",
    colorChooser: [
      "w3-cyan",
      "w3-indigo",
      "w3-light-blue",
      "w3-blue",
      "w3-gray",
    ],
  });
  const weData = cvData.find((item) => {
    return item.title === "Work experience";
  });
  const cvSkill = cvData.find((item) => {
    return item.title === "Skills and competences";
  });

  function onColorChoosed(index) {
    const newColor = state.colorChooser[index];
    const newColorChooser = state.colorChooser;
    newColorChooser.splice(index, 1, state.color);
    const newTextColor = newColor.replace("w3", "w3-text");
    setState({
      color: newColor,
      textColor: newTextColor,
      colorChooser: newColorChooser,
    });
  }
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
                    className={`fa fa-briefcase fa-fw w3-margin-right w3-large ${state.textColor}`}
                  ></i>
                  Electrical engineer
                </p>
                <p>
                  <i
                    className={`fa fa-home fa-fw w3-margin-right w3-large ${state.textColor}`}
                  ></i>
                  Budapest, HU
                </p>
                <p>
                  <i
                    className={`fa fa-envelope fa-fw w3-margin-right w3-large ${state.textColor}`}
                  ></i>
                  polyasan@gmail.com
                </p>
                <p>
                  <i
                    className={`fa fa-phone fa-fw w3-margin-right w3-large ${state.textColor}`}
                  ></i>
                  +36 20 318 8166
                </p>
                <hr />
                <p className="w3-large">
                  <b>
                    <i
                      className={`fa fa-asterisk fa-fw w3-margin-right ${state.textColor}`}
                    ></i>
                    Skills
                  </b>
                </p>
                {cvSkill.blocks.map((item, blIndex) => {
                  return (
                    <div key={blIndex}>
                      {item.map((sl, index) => {
                        return (
                          <>
                            <h5 className="w3-opacity" key={index}>
                              <b>{sl.label}</b>
                            </h5>
                            <p className="w3-text-dark-gray">
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
                      className={`fa fa-globe fa-fw w3-margin-right ${state.textColor}`}
                    ></i>
                    Languages
                  </b>
                </p>
                <h5 className="w3-opacity">
                  <b>English</b>
                </h5>
                <p className="w3-text-dark-gray">
                  Good command, good working knowledge
                </p>
                <h5 className="w3-opacity">
                  <b>Hungarian</b>
                </h5>
                <p className="w3-text-dark-gray">Native</p>
                <br />
              </div>
            </div>
            <br />
          </div>
          <div className="w3-twothird">
            <WorkExperience
              textColor={state.textColor}
              color={state.color}
              data={weData}
            />
            <Education textColor={state.textColor} color={state.color} />
          </div>
        </div>
      </div>
      <footer className={`w3-container ${state.color} w3-center w3-margin-top`}>
        <p>Chose a color</p>
        {state.colorChooser.map((item, index) => {
          return (
            <span
              key={index}
              className={`dot ${item}`}
              onClick={() => onColorChoosed(index)}
            ></span>
          );
        })}
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
