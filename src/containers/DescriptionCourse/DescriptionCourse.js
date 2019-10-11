import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";

import { getCourseDetail } from "../../Actions/courses";

import DesCourse from "./DesCourse/DesCourse";
import CardCourse from "./CardCourse/CardCourse";

class DescriptionCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseDescription: {}
    };
  }

  componentDidMount() {
    const pathname = this.props.history.location.pathname;
    const maKhoaHoc = _.last(pathname.split("/"));
    this.props.getCourseDetail(maKhoaHoc, res => {
      this.setState({
        courseDescription: res
      });
    });
  }

  render() {
    return (
      <div className="descourse">
        <div className="descourse__content">
          <DesCourse />
          <CardCourse />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { getCourseDetail }
)(DescriptionCourse);
