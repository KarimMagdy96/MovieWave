import React from "react";
import Slider from "react-slick";
import "./slider.css";
function AutoPlay(props) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="row row-cols-1 row-cols-md-4  w-100 overflow-hidden m-auto bg-transparent">
      <div className="slider-container w-100   bg-transparent">
        <Slider {...settings} className="slider   bg-transparent ">
          {props.show.map((item) => (
            <div className="h-100" key={item.id}>
              <div className="card   mx-1 bg-transparent text-white testssss ">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  className="card-img-top rounded-3 h-100 "
                  alt={item.title}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default AutoPlay;
