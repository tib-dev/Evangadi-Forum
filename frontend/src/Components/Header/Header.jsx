import React from "react";
import logo from "../../assets/images/evangadi-logo.png";
import classes from "./header.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext"; // Import the useAuth hook

function Header() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <div className={classes.header_wrapper}>
      <div className={classes.header_container}>
        <div className={classes.logo_container}>
          <Link to="/">
            <img src={logo} alt="Evangadi Logo" />
          </Link>
        </div>
        <div className={classes.left_nav_container}>
          <ul className={classes.nav_list}>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/howit">How it works</Link>
            </li>
            <li className={classes.auth}>
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  style={{
                    color: "white",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  LOG OUT
                </button>
              ) : (
                <Link to="/login" style={{ color: "white" }}>
                  SIGN IN
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
