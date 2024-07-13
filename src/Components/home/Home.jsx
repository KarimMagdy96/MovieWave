import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import axios from "axios";
import SimpleSlider from "../slider/Slider";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import Slider from "react-slick";
export default function Home() {
  const [show, setAllShows] = useState([]);
  async function fetchshow() {
    try {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=fd3c31e2d7a54303dc08756b66824aef"
      );
      setAllShows(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    fetchshow();
  }, []);
  // /////////////////
  let SearchTerm = useRef();
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  let Search = async function () {
    let searchTerm = SearchTerm.current.value;
    let url = `https://api.themoviedb.org/3/search/movie?api_key=fd3c31e2d7a54303dc08756b66824aef&query=${searchTerm}`;
    try {
      const { data } = await axios.get(url);
      if (data.results.length > 0) {
        setAllShows(data.results);
      } else if (data.results.length === 0) {
        fetchshow();
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <section className=" overflow-hidden">
      <section className="slider-container homeContainer  w-100 rounded-0  cstHight">
        <Slider {...settings}>
          {show.map((item, index) => (
            <div key={index} className=" imgContainer carousel-item">
              <div className=" text-white text-center sliderText  shadow px-2  z-3 position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center">
                <h2>Free Movies to Watch</h2>
                <p>
                  The search is over! Let MovieWave help you find the perfect
                  movie.
                </p>
                <button className=" p-3 btn btn-danger rounded-pill shadow">
                  Watch Now
                </button>
              </div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                className="d-block w-100 h-100 "
                alt=""
              />
            </div>
          ))}
        </Slider>
      </section>
      <div className=" w-100     position-relative  ">
        <div className="   sliderTop   ">
          <SimpleSlider show={show} />
        </div>
      </div>
      {/* ***************** */}
      {/* ******************* */}
      <div className="home ">
        <div className="container ">
          <div className=" mb-5 text-center">
            <h2 className=" text-white mb-4">
              The Smart Way To Pick A{" "}
              <span className=" text-danger">Movie</span>
            </h2>
            <input
              type="text"
              onChange={Search}
              ref={SearchTerm}
              className="form-control p-2 searchData"
              placeholder="Search"
            />
          </div>
          <div className="row row-cols-2 row-cols-md-4 g-4">
            {show.map((item) => (
              <div className="col" key={item.id}>
                <Link
                  to={`/move/${item.id} `}
                  className=" text-decoration-none"
                >
                  <div className="card h-100 bg-transparent text-white border-0 ">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                      className="card-img-top rounded-3"
                      alt={item.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text text-secondary text-sm-center text-md-start">
                        {item.overview.substring(0, 50)}...
                      </p>
                      <p>
                        <div className=" fs-6  ">Release Date</div>{" "}
                        <span className=" text-danger fw-bold fs-6 ">
                          {item.release_date}
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
