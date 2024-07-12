import React, { useState } from "react";
import "./header.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import img from "../../assets/img/logoDay.png";
import { useAuth } from "../../Context/AuthContext";

export default function Header() {
  async function logout() {
    try {
      await signout();
      Navigate("/login");
    } catch {
      seterror("failure to logout");
    }
  }
  const { signout } = useAuth();
  const [error, seterror] = useState("");
  const { currentUser } = useAuth();
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-black py-3  bg-glass fixed-top  shadow">
        <div className="container-fluid ">
          <Link className="navbar-brand p-0 m-0" to="/home">
            <img src={img} className="   w-75" alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header bg-dark">
              <h5
                className="offcanvas-title text-white"
                id="offcanvasNavbarLabel"
              >
                MoveWave
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body bg-black ">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link
                    className="nav-link active fw-medium"
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active  fw-medium"
                    aria-current="page"
                    to="/movies"
                  >
                    Movies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active  fw-medium"
                    aria-current="page"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active  fw-medium"
                    aria-current="page"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link
                    onClick={logout}
                    className="nav-link active  fw-medium"
                    aria-current="page"
                    to="/login"
                  >
                    LogOut
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
