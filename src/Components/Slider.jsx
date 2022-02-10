import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from 'react-elastic-carousel';
import "../Stylesheet/Components/Slider.scss";

export const Slider = ({ data }) => {

  const breakPoints = [
    {width: 500, itemsToShow: 1},
    {width: 768, itemsToShow: 2},
    {width: 900, itemsToShow: 3},
    {width: 1100, itemsToShow: 4},
]

  const config = {};
  return (
    <div className="sliderbar" style={{ height: "600px" }}>
      <Carousel showArrows={true} autoPlay={true} breakPoints={breakPoints}>
        {data.map((product, idx) => {
          return (
            <div className="hidden-print" key={idx}>
              <img
                className="slider-img"
                src={product.img}
                alt="Product Image"
              />
              <div className="mini-sliderbar" >
                <p className="img-name">{product.name}</p>
                <p className="img-price">{product.price}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
