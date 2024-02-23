import React from "react";
import "./footter.css";
import img from "./../../assets/img/popcorn.png";
export default function Footer() {
  return (
    <>
      <footer className="py-5  w-100    footer   position-relative ">
        <div className=" position-absolute top-0 start-50  translate-middle ">
          <img src={img} width="250px" alt="" />
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3 text-white">
              <h5>
                About Us<i className="fa-solid fa-minus fs-5"></i>
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium ad quisquam doloremque magni iure pariatur?
              </p>
              <div className="d-flex gap-3">
                <span>
                  <i className="fa-brands fs-3  fa-facebook"></i>
                </span>
                <span>
                  <i className="fa-brands fs-3 fa-linkedin"></i>
                </span>
                <span>
                  <i className="fa-brands fs-3  fa-x-twitter"></i>
                </span>
              </div>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5 className=" text-white">
                Company <i className="fa-solid fa-minus fs-5"></i>
              </h5>
              <ul className="nav flex-column ">
                <li className="nav-item mb-2">
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary text-white"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <h5 className=" text-white">
                Useful <i className="fa-solid fa-minus fs-5"></i>
              </h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5 className=" text-white">
                  Subscribe to our movies newsletter
                </h5>
                <p className=" text-white">
                  Monthly digest of what's new and exciting from us.
                </p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control bg-transparent border-1 border-secondary p-2"
                    placeholder="Email address"
                  />
                  <button className="btn btn-danger " type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
