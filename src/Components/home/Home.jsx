import React, { useEffect, useRef, useState, useCallback } from "react";
import "./home.css";
import axios from "axios";
import SimpleSlider from "../slider/Slider";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import Slider from "react-slick";
import { ToastContainer, toast } from "react-toastify";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Home() {
  const [show, setAllShows] = useState([]);
  const [searchwords, setSearch] = useState("");
  const { dataLoaded, setDataLoaded } = useAuth();
  const SearchTerm = useRef();

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
    arrows: false,
  };

  const fetchshow = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=fd3c31e2d7a54303dc08756b66824aef"
      );
      setAllShows(data.results);
      setDataLoaded(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDataLoaded(false);
      toast(" No Result found");
    }
  }, [setDataLoaded]);

  useEffect(() => {
    fetchshow();
  }, [fetchshow]);

  useEffect(() => {
    const searchHandler = async (searchwords) => {
      let url = `https://api.themoviedb.org/3/search/movie?api_key=fd3c31e2d7a54303dc08756b66824aef&query=${searchwords}`;
      try {
        const { data } = await axios.get(url);
        if (data.results.length > 0) {
          setAllShows(data.results);
        } else {
          fetchshow();
          toast("No Result Found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const debounceSearch = setTimeout(() => {
      if (searchwords.length > 0) {
        searchHandler(searchwords);
      }
    }, 1000);

    return () => {
      clearTimeout(debounceSearch);
    };
  }, [searchwords, fetchshow]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      {console.log("render")}
      {dataLoaded ? (
        <div className="loader-container">
          <div className="pulsing-circle" />
        </div>
      ) : (
        <section>
          <section className="slider-container homeContainer w-100 rounded-0 cstHight">
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
            {/* <Slider {...settings}>
              {show.map((item, index) => (
                <div key={index} className="imgContainer carousel-item">
                  <div className="text-white text-center sliderText shadow px-2 z-3 position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center">
                    <h2>Free Movies to Watch</h2>
                    <p>
                      The search is over! Let MovieWave help you find the
                      perfect movie.
                    </p>
                    <AnchorLink
                      offset="100"
                      href="#favMovies"
                      className="p-3 btn btn-danger rounded-pill shadow"
                    >
                      Watch Now
                    </AnchorLink>
                  </div>

                  <img
                    src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                    className="d-block w-100 h-100"
                    alt={item.title}
                  />
                </div>
              ))}
            </Slider> */}
          </section>
          <div className="w-100 position-relative">
            {/* <div className="sliderTop">
              <SimpleSlider show={show} />
            </div> */}
          </div>
          <div className="home">
            <div className="container">
              <div className="mb-5 text-center">
                <h2 id="favMovies" className="text-white mb-4">
                  The Smart Way To Pick A{" "}
                  <span className="text-danger">Movie</span>
                </h2>
                <input
                  type="text"
                  onChange={handleSearch}
                  ref={SearchTerm}
                  className="form-control p-2 searchData"
                  placeholder="Search"
                />
              </div>
              <div className="row row-cols-2 row-cols-md-4 g-4">
                {show.map((item) => (
                  <div className="col" key={item.id}>
                    <Link
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      to={`/move/${item.id}`}
                      className="text-decoration-none"
                    >
                      <div className="card h-100 bg-transparent text-white border-0">
                        <img
                          src={
                            item.poster_path
                              ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                              : "https://placehold.co/500x750"
                          }
                          className="card-img-top rounded-3"
                          alt={item.title}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{item.title}</h5>
                          <p className="card-text text-secondary text-sm-center text-md-start">
                            {item.overview.substring(0, 30)}...
                          </p>
                          <p>
                            <div className="fs-6">Release Date</div>{" "}
                            <span className="text-danger fw-bold fs-6">
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
      )}
    </>
  );
}
