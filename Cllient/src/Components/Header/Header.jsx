import React from "react";
import logo from "../../assets/images/evangadi-logo.png";
import classes from "./header.module.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className={classes.header_wrapper}>
      <div className={classes.header_container}>
        <div className={classes.logo_container}>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className={classes.left_nav_container}>
          <ul className={classes.nav_list}>
            <li>
              <Link to="/home">Home</Link>
            </li>

            <li>
              <Link to="/howIt">How it works</Link>
            </li>
            <li className={classes.auth}>
              <Link to="/register" style={{ color: "white" }}>
                SIGN IN
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
