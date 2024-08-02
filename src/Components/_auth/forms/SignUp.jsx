import { useRef, useState } from "react";
import "../authLayout.css";

import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Joi from "joi";
import { useAuth } from "../../../Context/AuthContext";

export default function SignUp() {
  let emailRef = useRef();
  let passwordRef = useRef();
  let userNameRef = useRef();
  let { signup } = useAuth();
  let [error, setError] = useState("");

  let [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  const handleSumbit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/home");
    } catch {
      setError("Error signing up may be email already exists");
      let notSuccessfullLogin = () =>
        toast(" Error signing up may be email already exists");

      notSuccessfullLogin();
      setLoading(false);
    }
  };

  let validateUser = function (e) {
    const schema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{8,30}$"))
        .required(),
      email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net"] },
        })
        .required(),
    });

    if (e.target.id == "password") {
      const singleSchema = Joi.object({ password: schema.extract("password") });
      const { error } = singleSchema.validate({
        password: passwordRef.current.value,
      });

      let failLogin = () => {
        return toast(" [!] Password must be 8-30 characters long");
      };

      if (error) {
        failLogin();
      } else {
      }
    } else if (e.target.id == "email") {
      const singleSchema = Joi.object({ email: schema.extract("email") });
      const { error } = singleSchema.validate({
        email: emailRef.current.value,
      });
      let failLogin = () => {
        return toast(" [!] Email must be a valid email address");
      };
      if (error) {
        failLogin();
      } else {
      }
    } else if (e.target.id == "name") {
      const singleSchema = Joi.object({ name: schema.extract("name") });
      const { error } = singleSchema.validate({
        name: userNameRef.current.value,
      });
      let failLogin = () => {
        return toast(" [!] Name must be between 3 and 30 characters");
      };
      if (error) {
        failLogin();
      } else {
      }
    }
    const { error } = schema.validate({
      name: userNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
    if (error) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  };

  return (
    <div className=" d-flex overflow-hidden    container h-100  justify-content-center  align-items-center  ">
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        theme="dark"
      />
      <div className=" text-white  w-100  d-flex justify-content-center">
        <div className=" signin-form  rounded-3  d-flex flex-column align-content-stretch loginFormContainer p-4  justify-content-center">
          <div className="d-flex">
            <div className="w-100">
              <h3 className="mb-4">Sign In</h3>
            </div>
          </div>
          <form onSubmit={handleSumbit} className="">
            <div className="form-group mb-3">
              <label className="label mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                ref={userNameRef}
                onBlur={validateUser}
                autoComplete="off"
                id="name"
                name="name"
                placeholder="Name"
                className="form-control py-2  text-white   bg-transparent    border-1 border-dark   "
                required
              />
            </div>

            <div className="form-group mb-3">
              <label className="label mb-1 " htmlFor="email">
                Email
              </label>
              <input
                type="email"
                onBlur={validateUser}
                id="email"
                ref={emailRef}
                autoComplete="off"
                name="email"
                placeholder="Email"
                className="form-control py-2 text-white bg-transparent    border-1 border-dark   "
                required
              />
            </div>
            <div className="form-group mb-3">
              <label className="label mb-1" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                onBlur={validateUser}
                ref={passwordRef}
                autoComplete="off"
                type="password"
                className="form-control py-2 text-white  bg-transparent    border-1 border-dark "
                placeholder="Password"
                required
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="form-control py-2  btn btn-danger rounded submit px-3"
                disabled={loading}
              >
                Register
              </button>
            </div>
          </form>
          <p className="text-center mt-4  mb-0">
            Not a member?{" "}
            <Link className="authBtn" data-toggle="tab" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
