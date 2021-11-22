import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { CreateAccount } from "../CreateAccount/CreateAccount";
import { SignIn } from "../SignIn/SignIn";

import "./Login.css";

function Login() {
  // State Definition
  const [btnState, setBtnState] = useState(false);

  // GUI BEHAIVOR
  const signUpButton = () => {
    setBtnState(true);
  };

  const signInButton = () => {
    setBtnState(false);
  };

  // REACT HOOK FORM
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Fragment>
      <div
        className={`container ${btnState ? "right-panel-active" : ""}`}
        id="container"
      >
        <CreateAccount
          btnState={btnState}
          setBtnState={setBtnState}
          signUpButton={signUpButton}
        />

        <SignIn />

        {/* ********************** SIGNIN FORM ****************************************** */}

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
