import React from "react";
import { useForm } from "react-hook-form";

function SignIn() {
  // REACT HOOK FORM VALIDATION
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // HANDLE ONSUBMIT
  const onSubmit = (data, event) => {
    console.log(data);
    alert("You are logged");

    // Clean Input Fields
    event.target.reset();
  };

  return (
    <>
      <div className="form-container sign-in-container">
        <form onSubmit={handleSubmit(onSubmit)}>
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
              required: "Insert a value password",
              minLength: {
                value: 8,
                message: "min length is 8",
              },
            })}
          />
          {errors.password && (
            <span role="alert">{errors.password.message}</span>
          )}
          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>
    </>
  );
}

export { SignIn };
