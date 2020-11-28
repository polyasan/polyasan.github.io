import React from 'react';

class Slideshow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {displays: ["block","none", "none"]};
      }
      componentDidMount(){
          setInterval(this.carousel.bind(this), 4000);
      }

    carousel() {
      let actualIndex = this.state.displays.indexOf("block");
      
      if(actualIndex < 2){
          actualIndex++;
      }else{
          actualIndex = 0;
      }
      let tDisplays = ["none", "none", "none"];
      tDisplays[actualIndex] = "block";
      this.setState({displays: tDisplays});
    }

    render() {
      return <div>
          <div class="mySlides w3-display-container w3-center" style={{display: this.state.displays[0]}}>
          <img alt="" src={process.env.PUBLIC_URL+"/FB_IMG_1605350897091.jpg"} style={{width: "100%"}} />
          <div class="w3-display-topmiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
            <h3>Triangulum Astro</h3>
            <p>
              <b>Catch the moment</b>
            </p>
          </div>
        </div>
        <div class="mySlides w3-display-container w3-center" style={{display: this.state.displays[1]}}>
          <img alt="" src={process.env.PUBLIC_URL+"/FB_IMG_1605350901029.jpg"} style={{width: "100%"}} />
          <div class="w3-display-topmiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
            <h3>Look at the sky</h3>
            <p>
              <b>Through the atmosphere</b>
            </p>
          </div>
        </div>
        <div class="mySlides w3-display-container w3-center" style={{display: this.state.displays[2]}}>
          <img alt="" src={process.env.PUBLIC_URL+"/FB_IMG_1605350904084.jpg"} style={{width: "100%"}} />
          <div class="w3-display-topmiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
            <h3>Get to know the universe</h3>
            <p>
              <b>And see unbelivable distances</b>
            </p>
          </div>
        </div>
      </div>;
    }
  }

  export default Slideshow