import React, { useRef, useState } from "react";
import classes from "./register.module.css";
import { Link } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

function Register() {
  const usernameDom = useRef();
  const firstNameDom = useRef();
  const lastNameDom = useRef();
  const emailDom = useRef();
  const passwordDom = useRef();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Accessing the input values using refs
    const username = usernameDom.current.value;
    const firstName = firstNameDom.current.value;
    const lastName = lastNameDom.current.value;
    const email = emailDom.current.value;
    const password = passwordDom.current.value;

    // Basic form validation
    if (!username || !firstName || !lastName || !email || !password) {
      alert("All fields are required");
      return;
    }

    console.log(username, firstName, lastName, email, password);

    // Perform form submission logic here
  };

  return (
    <section className={classes.register_container}>
      <div className={classes.hero_container}>
        <div className={classes.form_container_wrapper}>
          <h5>Join the network</h5>
          <p>
            Already have an account? <Link to="/signin">Sign in </Link>
          </p>

          <form onSubmit={handleSubmit} className={classes.form_container}>
            <div>
              <input
                type="text"
                ref={usernameDom}
                placeholder="Username"
                aria-label="Username"
              />
            </div>
            <div>
              <input
                type="text"
                ref={firstNameDom}
                placeholder="First name"
                aria-label="First name"
              />
              <input
                type="text"
                ref={lastNameDom}
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>
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
              I agree to the <Link to="/privacy-policy">privacy policy</Link>{" "}
              and <Link to="/terms-of-service">terms of service.</Link>
            </p>

            <button type="submit">Agree and Join</button>
          </form>
          <div className={classes.have_account}>
            <Link to="/login">Already have an account?</Link>
          </div>
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

export default Register;
