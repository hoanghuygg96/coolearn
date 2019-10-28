import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import MyCourseItem from "../MyCourseItem/MyCourseItem";
import { listMyCourse } from "../../../Actions/courses";

import { unsubCoures } from "../../../Actions/courses";
import { getUserDetail } from "../../../Actions/users";

import swal from "sweetalert";

class MyCourseContent extends Component {
  onUnsub = maKhoaHoc => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const { taiKhoan } = currentUser;
    const { listMyCourseProps, listMyCourse } = this.props;

    swal({
      title: "Bạn thật sự muốn hủy khóa học này?",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        unsubCoures(
          {
            maKhoaHoc,
            taiKhoan
          },
          () => {
            swal("Hủy khóa học thành công", {
              icon: "success"
            });

            getUserDetail(taiKhoan, res => {
              const listCourseFilter = listMyCourseProps.filter(
                el => el.maKhoaHoc !== maKhoaHoc
              );
              listMyCourse(listCourseFilter);
            });
            this.props.history.push("/my-course");
          }
        );
      }
    });
  };

  render() {
    const { listMyCourseProps } = this.props;
    const listCourse = listMyCourseProps.map(el => (
      <div key={el.maKhoaHoc}>
        <MyCourseItem
          maKhoaHoc={el.maKhoaHoc}
          tenKhoaHoc={el.tenKhoaHoc}
          hinhAnh={el.hinhAnh}
          nguoiTao={el.nguoiTao.hoTen}
          moTa={el.moTa}
          onUnsub={() => this.onUnsub(el.maKhoaHoc)}
        />
      </div>
    ));
    return (
      <div className="allcourses__container">
        <p>{listMyCourseProps.length} khóa học</p>

        <div className="mycourse__container--content">{listCourse}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    listMyCourseProps: state.listMyCourse
  };
};

const mapDispatchToProps = dispatch => {
  return {
    listMyCourse: data => {
      dispatch(listMyCourse(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MyCourseContent));
