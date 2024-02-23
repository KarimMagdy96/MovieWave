import { useState } from "react";
import "../authLayout.css";
import { Client, Account, ID } from "appwrite";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Joi from "joi";

/****************************************/
//
/************************************/
/************************************/
/************************************/
/************************************/
export default function SignUp() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  let [Loading, isLoading] = useState(false);
  let errors = "";

  /************************************/
  /************************************/
  /************************************/
  /************************************/
  function navigateToLogin() {
    navigate("/login");
    alert("hello");
  }
  /****************************************/
  //register user

  async function createUserAccount(user) {
    // Create a new user account using the Appwrite API.

    const client = new Client()

      .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint

      .setProject("65c9445135cc99abf695"); // Your project ID

    const account = new Account(client);

    const promise = account.create(user.name, user.email, user.password);

    promise.then(
      function (response) {
        console.log(response); // Success

        isLoading(false);

        const SuccessfullyLogin = () => toast("✅ Successfully Registered");

        SuccessfullyLogin();

        // navigate to login
        navigateToLogin();
      },

      function (error) {
        // Failure

        let myerror = () => toast("❌ username or email already exists");

        myerror();

        isLoading(false);
      }
    );
  }

  /************************************/

  async function submitUser(e) {
    if (schema.validate(user).error == undefined) {
      e.preventDefault();
      isLoading(true);
      createUserAccount(user);
    } else {
      e.preventDefault();
      validate();
    }
  }
  function getUser(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }

  // ********************************
  // *******************************

  const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
  });

  function validate() {
    const { error } = schema.validate(user);
    if (error) {
      errors = error.details[0].message;
      if (errors.includes("password")) {
        errors = "password must be alphanumeric and between 3 to 30 characters";
      }
      let failLogin = () => toast(errors);
      failLogin();
      console.log(errors);
      return false;
    }
    return true;
  }

  // *******************************
  // *******************************

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
      <div className=" text-white   w-100  d-flex justify-content-center    ">
        <div className=" signin-form  rounded-3  d-flex flex-column align-content-stretch loginFormContainer p-4  justify-content-center">
          <div className="d-flex">
            <div className="w-100">
              <h3 className="mb-4">Sign In</h3>
            </div>
          </div>
          <form onSubmit={submitUser} className="">
            <div className="form-group mb-3">
              <label className="label mb-1" htmlFor="name">
                Name
              </label>
              <input
                onChange={getUser}
                type="text"
                autoComplete="off"
                id="name"
                name="name"
                className="form-control py-2  text-white   bg-transparent    border-1 border-dark   "
                required
              />
            </div>

            <div className="form-group mb-3">
              <label className="label mb-1 " htmlFor="email">
                Email
              </label>
              <input
                onChange={getUser}
                type="email"
                id="email"
                autoComplete="off"
                name="email"
                className="form-control py-2 text-white bg-transparent    border-1 border-dark   "
                required
              />
            </div>
            <div className="form-group mb-3">
              <label className="label mb-1" htmlFor="password">
                Password
              </label>
              <input
                onChange={getUser}
                id="password"
                name="password"
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
              >
                {Loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm text-light" />
                    <span className="ms-2">Loading...</span>
                  </>
                ) : (
                  "Register"
                )}
              </button>
            </div>
          </form>
          <p className="text-center mt-4  mb-0">
            Not a member?{" "}
            <Link data-toggle="tab" to="/login">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
