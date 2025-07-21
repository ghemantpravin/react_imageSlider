import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Card_slider() {
  const data = [
    {
      name: "john",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
    },
    {
      name: "johnny",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
    },
    {
      name: "janardan",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container" style={{ padding: "2rem" }}>
      <Slider {...settings}>
        {data.map((values, index) => (
          <div key={index} style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", margin: "0 1rem" }}>
            <h3>{values.name}</h3>
            <p>{values.review}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Card_slider;