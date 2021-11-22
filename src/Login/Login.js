import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

import "./Login.css";

function Login() {
  // State Definition
  const [btnState, setBtnState] = useState(true);

  // REACT HOOK FORM VALIDATION
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // GUI BEHAIVOR
  const signUpButton = () => {
    setBtnState(true);
  };

  const signInButton = () => {
    setBtnState(false);
  };

  // HANDLE ONSUBMIT
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Fragment>
      <div
        className={`container ${btnState ? "right-panel-active" : ""}`}
        id="container"
      >
        <div className="form-container sign-up-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>

            {/*  NAME */}
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.name && <span> This field is required</span>}

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
              })}
            />
            {/* errors will return when field validation fails  */}
            {errors.email && <span> This field is required</span>}

            {/* PASSWORD */}
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "required",
                minLength: {
                  value: 8,
                  message: "min length is 8",
                },
              })}
            />
            {errors.password && (
              <span role="alert">{errors.password.message}</span>
            )}

            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please loginLoginin with your personal
                info
              </p>
              <button className="ghost" id="signIn" onClick={signInButton}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={signUpButton}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export { Login };
