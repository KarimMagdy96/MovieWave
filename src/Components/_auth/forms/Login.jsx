import { useRef, useState } from "react";
import "./login.css";
import { Client, Account } from "appwrite";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Joi from "joi";
import { useAuth } from "../../../Context/AuthContext";

/****************************************/
//
/************************************/
/************************************/
/************************************/
/************************************/
export default function Login(props) {
  // *******************************
  // *******************************
  let emailRef = useRef();
  let passwordRef = useRef();
  let { signup } = useAuth();
  let { login } = useAuth();
  let [error, setError] = useState("");
  let [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const handleSumbit = async (e) => {
    e.preventDefault();
    const SuccessfullyLogin = () =>
      toast(`✅ ${emailRef.current.value} logged in successfully`);

    try {
      await login(emailRef.current.value, passwordRef.current.value);
      SuccessfullyLogin();
      setError("");
      setLoading(true);
      navigate("/home", { replace: true });
    } catch {
      setError("Error signing up");
      const unSuccessfullyLogin = () => toast(`wrong password o mail`);
      unSuccessfullyLogin();
      setLoading(false);
    }
  };
  let validateUser = function (e) {
    const schema = Joi.object({
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
    }

    const { error } = schema.validate({
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
    <div className=" d-flex overflow-hidden container h-100 mainstyle justify-content-center  align-items-center  ">
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
      <div className=" text-white   w-100  d-flex justify-content-center    ">
        <div className=" signin-form  rounded-3  d-flex flex-column align-content-stretch loginFormContainer p-4  justify-content-center">
          <div className="d-flex">
            <div className="w-100">
              <h3 className="mb-4">Log In</h3>
            </div>
          </div>
          <form onSubmit={handleSumbit} className="">
            <div className="form-group mb-3">
              <label className="label mb-1 " htmlFor="email">
                Email
              </label>
              <input
                type="email"
                ref={emailRef}
                onBlur={validateUser}
                id="email"
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
                disabled={loading}
                type="submit"
                className="form-control py-2  btn btn-danger rounded submit px-3"
              >
                <span className="ms-2">Log In</span>
              </button>
            </div>
          </form>
          <p className="text-center mt-4  mb-0">
            Don't have an account?{" "}
            <Link className="authBtn" data-toggle="tab" to="/signup">
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
