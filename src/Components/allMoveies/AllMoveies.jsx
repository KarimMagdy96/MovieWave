import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./allMoveies.css";
import { useAuth } from "./../../Context/AuthContext";
export default function AllMoveies() {
  const [show, setAllShows] = useState([]);
  let [page, setpage] = useState(10);
  let { dataLoaded } = useAuth();
  let { setDataLoaded } = useAuth();
  async function fetchshow(page) {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDNjMzFlMmQ3YTU0MzAzZGMwODc1NmI2NjgyNGFlZiIsInN1YiI6IjYyYWYyMzk5M2M0MzQ0MDgwYzQzZGY0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6lrNYwAHMGXZqfXRMSLr-TNP8ru3ME3J-Tt_uBJ24yA",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
      options
    )
      .then((response) => response.json())
      .then((response) => setAllShows(response.results))
      .then(() => setDataLoaded(false))
      .catch((err) => {
        console.error("Error:", err);
        setDataLoaded(false);
      });
  }

  useEffect(() => {
    fetchshow(page);
  }, []);

  useEffect(() => {
    fetchshow(page);
  }, [page]);
  useEffect(() => {
    fetchshow(page);
  }, [page]);

  let changePage = () => {
    setpage(page + 1);
  };
  // /////////////////

  return (
    <>
      {dataLoaded ? (
        <div className="loader-container">
          <div className="pulsing-circle" />
        </div>
      ) : (
        <section>
          <div className="home ">
            <div className="container movie-container">
              <div className=" fw-bold fs-5 mb-5 text-white">
                latest Distributions <i className="fa-solid fa-minus fs-5"></i>
              </div>

              <div className="row row-cols-2 row-cols-md-4 g-4">
                {show.map((item) => (
                  <div className="col" key={item.id}>
                    <Link
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      to={`/move/${item.id} `}
                      className=" text-decoration-none"
                    >
                      <div className="card h-100 bg-transparent text-white border-0">
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                          className="card-img-top rounded-3"
                          alt={item.title}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{item.title}</h5>
                          <p className="card-text text-secondary">
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
              <div className="  d-flex justify-content-center mt-5">
                <nav aria-label="Page navigation example   ">
                  <ul className="pagination mb-0 ">
                    <li className="page-item ">
                      <button
                        className="page-link bg-transparent text-white"
                        onClick={() => setpage(page == 1 ? page : page - 1)}
                      >
                        Previous
                      </button>
                    </li>
                    <li className="page-item">
                      <button
                        className="page-link bg-transparent text-white"
                        onClick={() => setpage(1)}
                      >
                        1
                      </button>
                    </li>
                    <li className="page-item">
                      <button
                        className="page-link bg-transparent text-white"
                        onClick={() => setpage(2)}
                      >
                        2
                      </button>
                    </li>
                    <li className="page-item">
                      <button
                        className="page-link bg-transparent text-white"
                        onClick={() => setpage(3)}
                      >
                        3
                      </button>
                    </li>
                    <li className="page-item">
                      <button
                        className="page-link bg-transparent text-white"
                        onClick={() => setpage(page + 1)}
                      >
                        Next
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
