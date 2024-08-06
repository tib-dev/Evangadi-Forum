import React, { useRef, useState } from "react";
import axiosBase from "../axios";
import classes from "./login.module.css"; // Make sure the path is correct
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

function Login() {
  const emailDom = useRef();
  const passwordDom = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Accessing the input values using refs
    const email = emailDom.current.value;
    const password = passwordDom.current.value;

    // Basic form validation
    if (!email || !password) {
      return;
    }

    try {
      const response = await axiosBase.post("/users/login", {
        email,
        password,
      });
      navigate("/");
      console.log("User logged in successfully:", response.data);
    } catch (error) {
      console.error(error.response);
    }
  };

  return (
    <section className={classes.login_container}>
      <div className={classes.hero_container}>
        <div className={classes.form_container_wrapper}>
          <h5>Login to your account</h5>
          <p>
            Don't have an account?{" "}
            <Link to="/register">Create a new account</Link>
          </p>

          <form onSubmit={handleSubmit} className={classes.form_container}>
            <div>
              <input
                type="email"
                ref={emailDom}
                placeholder="Email address"
                aria-label="Email address"
              />
            </div>
            <div className={classes.input_password}>
              <input
                type={showPassword ? "text" : "password"}
                ref={passwordDom}
                placeholder="Password"
                aria-label="Password"
              />
              <span
                className={classes.eye_icon}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </span>
            </div>
            <p>
              <Link to="/recover">Forgot password?</Link>
            </p>
            <button type="submit">Login</button>
          </form>
        </div>

        <div className={classes.about_container}>
          <small>About</small>
          <h1>Evangadi Networks</h1>

          <p>
            No matter what stage of life you are in, whether you’re just
            starting elementary school or being promoted to CEO of a Fortune 500
            company, you have much to offer to those who are trying to follow in
            your footsteps.
          </p>
          <p>
            Whether you are willing to share your knowledge or you are just
            looking to meet mentors of your own, please start by joining the
            network here.
          </p>
          <div className={classes.login_link}>
            <Link to="/howit">HOW IT WORKS</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
