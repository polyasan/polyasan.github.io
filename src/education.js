function Education(props) {
  return (
    <div className="w3-container w3-card w3-white">
      <h2 className="w3-text-grey w3-padding-16">
        <i
          className={`fa fa-certificate fa-fw w3-margin-right w3-xxlarge ${props.textColor}`}
        ></i>
        Education
      </h2>
      <div className="w3-container">
        <h5 className="w3-opacity">
          <b>Budapest University of Technology and Economics</b>
        </h5>
        <h6 className={props.textColor}>
          <i className="fa fa-calendar fa-fw w3-margin-right"></i>2009 - 2016
        </h6>
        <p>
          Bachelor Degree
          <br />
          Electrical engineer, embedded systems
        </p>
        <br />
      </div>
    </div>
  );
}

export default Education;
