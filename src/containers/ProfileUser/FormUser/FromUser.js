import React, { Component } from "react";
import { editUser, getUserDetail } from "../../../Actions/users";
import { maNhom } from "../../../MaNhom/MaNhom";
import { setCurrentUser } from "../../../Actions/users";
import { connect } from "react-redux";

import swal from "sweetalert";

class FromUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      hoTen: "",
      soDT: "",
      email: "",
      maLoaiNguoiDung: "",
      maNhom: maNhom
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const { taiKhoan, hoTen, soDT, email, maLoaiNguoiDung } = currentUser;
    this.setState({
      taiKhoan: taiKhoan,
      hoTen: hoTen,
      soDT: soDT,
      email: email,
      maLoaiNguoiDung: maLoaiNguoiDung
    });
  }

  onSubmit = e => {
    e.preventDefault();
    const {
      taiKhoan,
      hoTen,
      soDT,
      maLoaiNguoiDung,
      maNhom,
      email
    } = this.state;

    getUserDetail(taiKhoan, user => {
      const { matKhau } = user;
      editUser(
        {
          taiKhoan,
          hoTen,
          soDT,
          maLoaiNguoiDung,
          email,
          maNhom,
          matKhau
        },
        () => {
          const currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.props.setCurrentUser(currentUser);
          swal({
            title: "Đổi thông tin thành công",
            icon: "success",
            button: "Đóng"
          });
        }
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit} className="profile__form">
          <div className="profile__flex">
            <div
              className="form-group profile__group"
              style={{ marginBottom: "2rem" }}
            >
              <input
                type="text"
                placeholder="Họ tên"
                id="hoten"
                required="required"
                name="hoTen"
                className="form__input profile__input"
                defaultValue={this.state.hoTen}
                onChange={this.onChange}
              />
              <label htmlFor="hoten" className="form__label">
                Họ tên
              </label>
            </div>

            <div
              className="form-group profile__group"
              style={{ marginBottom: "2rem" }}
            >
              <input
                type="text"
                placeholder="Email"
                id="email"
                name="email"
                className="form__input profile__input"
                defaultValue={this.state.email}
                onChange={this.onChange}
                required="required"
              />
              <label htmlFor="email" className="form__label">
                Email
              </label>
            </div>

            <div
              className="form-group profile__group"
              style={{ marginBottom: "-4rem" }}
            >
              <input
                type="text"
                placeholder="Số điện thoại"
                id="soDT"
                name="soDT"
                className="form__input profile__input"
                defaultValue={this.state.soDT}
                onChange={this.onChange}
                required="required"
              />
              <label htmlFor="soDT" className="form__label">
                Số điện thoại
              </label>
            </div>
          </div>

          <div className="profile__button">
            <button className="profile__button-bottom">Lưu thông tin</button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

const mapDisPatchToProps = dispatch => {
  return {
    setCurrentUser: data => {
      dispatch(setCurrentUser(data));
    }
  };
};

export default connect(
  null,
  mapDisPatchToProps
)(FromUser);
