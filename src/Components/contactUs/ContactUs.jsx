import React from "react";
import img from "../../assets/img/contact.png";
import "./contactUs.css";
export default function ContactUs() {
  return (
    <>
      <section className="about  ">
        <div className="hero_about  text-white  fs-1  d-flex justify-content-center align-items-center fw-bold ">
          Contact US
        </div>
        <div className="container pt-4 about-container">
          <div className="row">
            <div className="col-md-6 ">
              <h6 className="m-0 text-white  text-center fw-bold  text-uppercase">
                lets get stated
              </h6>
              <div className="text-center  text-white fs-2  fw-bold">
                Looking for more movies?
              </div>
              <p className=" px-2 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio reprehenderit eos facere corrupti. Inventore
                asperiores eaque laudantium. Quasi, qui dolor?
              </p>
              <div className="mt-4 ">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control p-3  rounded-1 "
                    id="formGroupExampleInput"
                    placeholder="Name*"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control  p-3  rounded-1"
                    id="formGroupExampleInput2"
                    placeholder="Phone*"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control  p-3  rounded-1"
                    id="formGroupExampleInput2"
                    placeholder="Email*"
                  />
                </div>
                <div className="mb-3">
                  <button className=" p-3 bg-primary btn px-5 fw-bold text-white">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6  mb-4  order-first order-md-last   d-flex justify-content-end align-items-end">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27632.068724998062!2d31.186060299999994!3d30.0366114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584401b1aa257f%3A0xc7170530e57ad20d!2z2YXYs9is2K8g2K7Yp9iq2YUg2KfZhNmF2LHYs9mE2YrZhg!5e0!3m2!1sar!2seg!4v1708608851374!5m2!1sar!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
