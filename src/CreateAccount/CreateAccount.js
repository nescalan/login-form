import React, { useState } from "react";
import { useForm } from "react-hook-form";

function CreateAccount() {
  // REACT HOOK FORM VALIDATION
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // HANDLE ONSUBMIT
  const onSubmit = (data, event) => {
    console.log(data);
    alert("Account Created");

    // Clean Input Fields
    event.target.reset();
  };

  return (
    <>
      <div className="form-container sign-up-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* CREATE ACOOUNT */}
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
    </>
  );
}

export { CreateAccount };
