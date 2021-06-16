function WorkExperience(props) {
  return (
    <div className="w3-container w3-card w3-white w3-margin-bottom">
      <h2 className="w3-text-grey w3-padding-16">
        <i
          className={`fa fa-suitcase fa-fw w3-margin-right w3-xxlarge ${props.textColor}`}
        ></i>
        Work Experience
      </h2>
      {props.data.blocks.map((item, index, arr) => {
        return (
          <div key={index} className="w3-container">
            <h5 className="w3-opacity">
              <b>
                {item[1].value} / {item[2].value}
              </b>
            </h5>
            <h6 className={props.textColor}>
              <i className="fa fa-calendar fa-fw w3-margin-right"></i>
              {item[0].value.replace("Present", "")}{" "}
              {index === 0 && (
                <span className={`w3-tag w3-round ${props.color}`}>
                  Current
                </span>
              )}
            </h6>
            <p>{item[3].value}</p>
            {arr.length - 1 !== index ? <hr /> : <br />}
          </div>
        );
      })}
    </div>
  );
}
export default WorkExperience;
