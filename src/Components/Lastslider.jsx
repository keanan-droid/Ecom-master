import React from 'react';
import Carousel from 'react-elastic-carousel';
import '../Stylesheet/Components/Lastslider.scss';

export const Lastslider = ({ data }) => {

    const breakPoints = [
        {width: 500, itemsToShow: 1},
        {width: 768, itemsToShow: 2},
        {width: 900, itemsToShow: 3},
        {width: 1100, itemsToShow: 4},
    ]

    return (
      <div className="slider" style={{ height: "600px" }}>
        <Carousel showArrows={true} autoPlay={true} breakPoints={breakPoints}>
          {data.map((product, idx) => {
            return (
              <div className="card" key={idx}>
                <img
                  className="slider-img"
                  src={product.img}
                  alt="Product Image"
                />
                <div className='p-tags'>
                    <p className="title">{product.title}</p>
                    <p className="heading">{product.heading}</p>
                    <p className="heading2">{product.heading2}</p>
                    <p className='button'>{product.button}</p>
                </div>
              </div>
            );
          })}
            <p>Discover World</p>
        </Carousel>
      </div>
    );
  };

