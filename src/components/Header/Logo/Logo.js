import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as BrandLogo } from "../../../assets/SVG/brightness_highbrightness_7.svg";

const Logo = () => {
  return (
    <React.Fragment>
      <Link to="/" className="header__brand">
        <span>CO</span>
        <BrandLogo className="header__brand-logo" />
        <span>LEARN</span>
      </Link>
    </React.Fragment>
  );
};

export default Logo;
