import React, { Component } from "react";
import { connect } from "react-redux";
import { editUser, setCurrentUser } from "../../../Actions/users";
import { maNhom } from "../../../MaNhom/MaNhom";

import swal from "sweetalert";
import { Spinner } from "reactstrap";

class FromPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      hoTen: "",
      soDT: "",
      email: "",
      maLoaiNguoiDung: "",
      maNhom: maNhom,

      matKhau: "",
      nhapLaiMatKhau: "",

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
      maLoaiNguoiDung: maLoaiNguoiDung,
      email: email
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

    if (this.state.matKhau === this.state.nhapLaiMatKhau) {
      const {
        taiKhoan,
        hoTen,
        soDT,
        maLoaiNguoiDung,
        maNhom,
        email,
        matKhau
      } = this.state;

      editUser(
        { taiKhoan, hoTen, soDT, maLoaiNguoiDung, email, maNhom, matKhau },
        () => {
          this.setState({ loading: false });
          swal({
            title: "Đổi mật khẩu thành công",
            icon: "success",
            button: "Đóng"
          });

          this.props.setCurrentUser({});

          localStorage.removeItem("currentUser");
          localStorage.removeItem("accessToken");
          localStorage.removeItem("chiTietKhoaHocGhiDanh");

          this.props.history.push("/signin");
        }
      );
    } else {
      swal({
        title: "Nhập lại mật khẩu không đúng",
        icon: "error",
        button: "Đóng"
      });
    }
  };

  render() {
    const { loading } = this.state;
    return (
      <form onSubmit={this.onSubmit} className="profile__form">
        <div className="profile__flex">
          <div className="form-group profile__group">
            <input
              type="password"
              placeholder="Mật khẩu"
              id="matKhau"
              name="matKhau"
              required="required"
              className="form__input profile__input"
              onChange={this.onChange}
            />
            <label htmlFor="matKhau" className="form__label">
              Mật khẩu
            </label>
          </div>

          <div
            className="form-group profile__group"
            style={{ marginBottom: "-35px" }}
          >
            <input
              type="password"
              placeholder="Nhập lại mật khẩu"
              id="nhapLaiMatKhau"
              name="nhapLaiMatKhau"
              required="required"
              className="form__input profile__input"
              onChange={this.onChange}
            />
            <label htmlFor="nhapLaiMatKhau" className="form__label">
              Nhập lại mật khẩu
            </label>
          </div>
        </div>
        <div className="profile__button">
          <button className="profile__button-bottom" disabled={loading}>
            {loading && <Spinner style={{ marginRight: "1.4rem" }} />}Đổi mật
            khẩu
          </button>
        </div>
      </form>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: dataUser => {
      dispatch(setCurrentUser(dataUser));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(FromPassword);
