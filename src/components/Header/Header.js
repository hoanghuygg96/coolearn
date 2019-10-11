import React, { Component } from "react";
import Logo from "./Logo/Logo";
import { withRouter } from "react-router-dom";

import Categories from "./Categories/Categories";
import HeaderButton from "./HeaderButton/HeaderButton";
import Cart from "./Cart/Cart";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";
import Slider from "../../containers/Home/Slider/Slider";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { location } = this.props;

    const pathnameAdmin = location.pathname.substring(1, 6);

    const display = pathnameAdmin === "admin" ? "none" : "block";

    const img = location.pathname !== "/" ? "url()" : null;
    const showSlider = location.pathname === "/" ? <Slider /> : null;
    return (
      <div
        className="header"
        style={{ backgroundImage: img, display: display }}
      >
        <Navbar expand="md" className="header__content">
          <NavbarBrand href="/">
            {/* logo */}
            <Logo />
            {/* logo end */}
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse
            isOpen={this.state.isOpen}
            navbar
            className="header__navbar"
          >
            <Nav className="ml-auto header__nav" navbar>
              {/* // categories */}
              <Categories />
              {/* // categories end */}

              <Cart />

              <HeaderButton />
            </Nav>
          </Collapse>
        </Navbar>

        {showSlider}
      </div>
    );
  }
}

export default withRouter(Header);
