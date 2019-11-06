import React, { Component } from "react";
import { signup } from "../../../Actions/users";
import { maNhom } from "../../../MaNhom/MaNhom";
import { Spinner } from "reactstrap";

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

      loading: false
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    this.setState({ loading: true });

    setTimeout(() => {
      if (this.state.loading) {
        this.setState({ loading: false });
      }
    }, 10000);

    const { taiKhoan, matKhau, hoTen, soDT, email, maNhom } = this.state;
    console.log({ taiKhoan, matKhau, hoTen, soDT, email, maNhom });

    signup({ taiKhoan, matKhau, hoTen, soDT, email, maNhom }, () => {
      this.props.history.push("/signin");
      this.setState({ loading: false });
    });
  };

  render() {
    const { loading } = this.state;

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
              <button className="my-button my-button-full" disabled={loading}>
                {loading && <Spinner style={{ marginRight: "1.4rem" }} />}Đăng
                ký
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
