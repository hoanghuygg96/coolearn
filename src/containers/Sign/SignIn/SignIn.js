import React, { Component } from "react";
import { signin, setCurrentUser, getUserDetail } from "../../../Actions/users";

import { connect } from "react-redux";

const initialState = {
  taiKhoan: "",
  matKhau: "",
  taiKhoanError: "",
  matKhauError: ""
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let taiKhoanError = "";
    let matKhauError = "";

    if (!this.state.taiKhoan) {
      taiKhoanError = "Tài khoản không để trống";
    }

    if (!this.state.matKhau) {
      matKhauError = "Mật khẩu không để trống";
    }

    if (taiKhoanError || matKhauError) {
      this.setState({ taiKhoanError, matKhauError });
      return false;
    }

    return true;
  };

  onSubmit = e => {
    e.preventDefault();
    // const isValid = this.validate();

    const { taiKhoan, matKhau } = this.state;

    // if (isValid) {
    signin({ taiKhoan, matKhau }, user => {
      getUserDetail(user.taiKhoan, () => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));

        this.props.setCurrentUser(currentUser);
      });

      if (user.maLoaiNguoiDung === "HV") {
        this.props.history.push("/");
      } else if (user.maLoaiNguoiDung === "GV") {
        this.props.history.push("/admin");
      }
    });
    this.setState(initialState);
    // }
  };

  render() {
    return (
      <div className="signin">
        <div className="signin__content">
          <form onSubmit={this.onSubmit} className="signin__form">
            <h2 className="heading-secondary  u-margin-bottom-medium signin__heading">
              Đăng Nhập
            </h2>
            <div className="signin__gird">
              <div
                className="form-group signin__group"
                style={{ marginBottom: "55px" }}
              >
                <input
                  type="text"
                  placeholder="Tài khoản"
                  id="taikhoan"
                  className="form__input signin__input"
                  name="taiKhoan"
                  onChange={this.onChange}
                  required="required"
                />
                <label htmlFor="taikhoan" className="form__label">
                  Tài khoản
                </label>
                <div style={{ fontSize: 16, color: "red", marginTop: "-20px" }}>
                  {this.state.taiKhoanError}
                </div>
              </div>

              <div
                className="form-group signin__group"
                style={{ marginBottom: "55px" }}
              >
                <input
                  type="password"
                  placeholder="Mật khẩu"
                  id="matkhau"
                  className="form__input signin__input"
                  name="matKhau"
                  onChange={this.onChange}
                  required="required"
                />
                <label htmlFor="matkhau" className="form__label">
                  Mật khẩu
                </label>
                <div style={{ fontSize: 16, color: "red", marginTop: "-20px" }}>
                  {this.state.matKhauError}
                </div>
              </div>

              <div className="signin__button">
                <button className="my-button my-button-full">Đăng nhập</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispacthToProps = dispatch => {
  return {
    setCurrentUser: dataUser => {
      dispatch(setCurrentUser(dataUser));
    }
  };
};

export default connect(
  null,
  mapDispacthToProps
)(SignIn);
