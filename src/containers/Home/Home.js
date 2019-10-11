import React, { Component } from "react";
// import Slider from "./Slider/Slider";
import Banner from "./Banner/Banner";
import Courses from "./Courses/Courses";
import Testimonials from "./Testimonials/Testimonials";
// import Subscribe from "./Subscribe/Subscribe";
import Minimalist from "./Minimalist/Minimalist";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Slider /> */}
        <Banner />
        <Courses />
        {/* <Subscribe /> */}
        <Testimonials />
        <Minimalist />
      </React.Fragment>
    );
  }
}

export default Home;
