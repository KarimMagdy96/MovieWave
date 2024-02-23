import React, { useEffect, useState } from "react";
import "./move.css";
import { useParams } from "react-router-dom";
import { func } from "joi";
export default function Move() {
  let { id } = useParams();
  const [movieDetails, setmovieDetails] = useState(null);
  function getMovieDetails(id) {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=fd3c31e2d7a54303dc08756b66824aef`
    )
      .then((response) => response.json())
      .then((data) => {
        setmovieDetails(data);
      });
  }
  useEffect(() => {
    getMovieDetails(id);
  }, []);

  return (
    <div>
      {movieDetails ? (
        <div className="herodetails">
          <div className=" herofilter w-100  position-relative">
            <img
              src={`  https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`}
              alt=""
              className="w-100 heroimg"
            />
            <div className=" ">
              <div className=" container    text-white mt-4">
                <div className="row ">
                  <div className="col-md-6 fs-1  fw-bold ">
                    <div className=" pe-5 ">
                      <div className=" mb-2"> {movieDetails.title}</div>
                      <div className=" fs-6 fw-normal mb-1   text-white">
                        <span>
                          {" "}
                          {movieDetails.adult ? (
                            <span className=" border px-1">PG-18</span>
                          ) : (
                            <span className=" border px-1">PG-16</span>
                          )}
                        </span>
                        <span className=" mx-2">
                          <span className="bg-warning fw-bold text-black px-1 mx-1 rounded-1">
                            IMDB
                          </span>
                          <span className=" ps-1">
                            {movieDetails.vote_average.toFixed(1)}
                          </span>
                        </span>
                        <span className="  fw-bold text-danger">
                          {" "}
                          {movieDetails.release_date.substring(0, 4)}
                        </span>
                      </div>
                      <div className="overviow">
                        <p className="fs-6 fw-normal text-secondary mt-2">
                          {movieDetails.overview}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className=" fs-5 fw-bold  mt-2 mb-3 ">
                      Distribution Countries{" "}
                      <i className="fa-solid fa-minus fs-5"></i>
                    </div>
                    <span
                      className={`fi fs-2  fi-${movieDetails.production_countries[0].iso_3166_1.toLowerCase()}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "jyyyyyyyyyyyyy"
      )}
    </div>
  );
}
