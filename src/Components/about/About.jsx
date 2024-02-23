import React from "react";
import img from "../../assets/img/contact.png";
import "./about.css";
export default function About() {
  return (
    <>
      <section className="about">
        <div className="hero_about  text-white  fs-1  d-flex justify-content-center align-items-center fw-bold ">
          ABOUT US
        </div>
        <div className="container pt-4 about-container">
          <div className="row">
            <div className="col-md-6 ">
              <h6 className="m-0 text-white  text-center fw-bold  text-uppercase">
                lets get stated
              </h6>
              <div className="text-center text-white  fs-2  fw-bold">
                Looking for more movies?
              </div>
              <p className=" px-2 mt-2 text-white">
                <div className=" mb-3 ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                  aliquam eos cupiditate delectus dolor laborum totam, soluta
                </div>
                culpa? Voluptas asperiores a, pariatur mollitia libero,
                dignissimos eum sunt magni tempora accusamus, fugit modi nostrum
                ratione delectus quibusdam autem possimus temporibus
                necessitatibus officiis! Autem, ipsam exercitationem omnis
                reprehenderit sunt repudiandae impedit natus vel illum libero
                rem expedita debitis, unde asperiores iure ipsa consectetur
                sapiente assumenda aut harum nostrum! Laudantium reiciendis
                dolore excepturi?
              </p>
              <div className="mt-4 ">
                <div className="mb-3">
                  <button className=" p-3 bg-primary btn px-5 fw-bold text-white">
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6  mb-4  order-first order-md-last  d-flex justify-content-end align-items-end">
              <img src={img} className=" img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
