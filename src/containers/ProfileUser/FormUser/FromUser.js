import React, { Component } from "react";
import { editUser, getUserDetail } from "../../../Actions/users";
import { maNhom } from "../../../MaNhom/MaNhom";
import { setCurrentUser } from "../../../Actions/users";
import { connect } from "react-redux";

import swal from "sweetalert";
import { Spinner } from "reactstrap";

class FromUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      hoTen: "",
      soDT: "",
      email: "",
      maLoaiNguoiDung: "",
      maNhom: maNhom,

      loading: false
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

    this.setState({ loading: true });

    setTimeout(() => {
      if (this.state.loading) {
        this.setState({ loading: false });
      }
    }, 10000);

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
          this.setState({ loading: false });

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
    const { loading } = this.state;

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
            <button className="profile__button-bottom" disabled={loading}>
              {loading && <Spinner style={{ marginRight: "1.4rem" }} />}Lưu
              thông tin
            </button>
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
