import React, { Component } from "react";
import { signup } from "../../../Actions/users";
import { maNhom } from "../../../MaNhom/MaNhom";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taikhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      email: "",
      maNhom: maNhom,

      taiKhoanError: "",
      matKhauError: "",
      hoTenError: "",
      soDTError: "",
      emailError: ""
    };
  }

  validate = () => {
    let taiKhoanError = "";
    let matKhauError = "";
    let hoTenError = "";
    let soDTError = "";
    let emailError = "";

    if (!this.state.taiKhoan) {
      taiKhoanError = "Tài khoản không để trống";
    }

    if (!this.state.matKhau) {
      matKhauError = "Mật khẩu không để trống";
    }

    if (!this.state.hoTen) {
      hoTenError = "Họ tên không để trống";
    }

    if (!/^\d+$/.test(this.state.soDT)) {
      soDTError = "Số điện thoại không được chứa ký tự";
    }

    if (!this.state.email.includes("@")) {
      emailError = "Email không hợp lệ";
    }

    if (
      taiKhoanError ||
      matKhauError ||
      hoTenError ||
      soDTError ||
      emailError
    ) {
      this.setState({
        taiKhoanError,
        matKhauError,
        hoTenError,
        soDTError,
        emailError
      });
      return false;
    }

    return true;
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    // const isValid = this.validate();

    const { taiKhoan, matKhau, hoTen, soDT, email, maNhom } = this.state;
    console.log({ taiKhoan, matKhau, hoTen, soDT, email, maNhom });
    // if (isValid) {
    signup({ taiKhoan, matKhau, hoTen, soDT, email, maNhom }, () => {
      this.props.history.push("/signin");
    });
    // }
  };

  render() {
    return (
      <div className="signup">
        <div className="signup__content">
          <form onSubmit={this.onSubmit} className="signup__form">
            <h2 className="heading-secondary  u-margin-bottom-medium signup__heading">
              Đăng Ký
            </h2>
            <div className="signup__gird">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Tài khoản"
                  id="taikhoan"
                  className="form__input"
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

              <div className="form-group">
                <input
                  type="password"
                  placeholder="Mật khẩu"
                  id="matkhau"
                  className="form__input"
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

              <div className="form-group">
                <input
                  type="hoTen"
                  placeholder="Họ tên"
                  id="hoten"
                  className="form__input"
                  name="hoTen"
                  onChange={this.onChange}
                  required="required"
                />
                <label htmlFor="hoten" className="form__label">
                  Họ tên
                </label>
                <div style={{ fontSize: 16, color: "red", marginTop: "-20px" }}>
                  {this.state.hoTenError}
                </div>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Số điện thoại"
                  id="sodienthoai"
                  className="form__input"
                  name="soDT"
                  onChange={this.onChange}
                  required="required"
                />
                <label htmlFor="sodienthoai" className="form__label">
                  Số điện thoại
                </label>
                <div style={{ fontSize: 16, color: "red", marginTop: "-20px" }}>
                  {this.state.soDTError}
                </div>
              </div>

              <div className="form-group signup__email">
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  className="form__input"
                  name="email"
                  onChange={this.onChange}
                  required="required"
                />
                <label htmlFor="email" className="form__label">
                  Email
                </label>
                <div style={{ fontSize: 16, color: "red", marginTop: "-20px" }}>
                  {this.state.emailError}
                </div>
              </div>
            </div>

            <div className="signup__button">
              <button className="my-button my-button-full">Đăng ký</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
