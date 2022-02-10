import React from "react";

export const Banner = ({ images, height, width }) => {
  return (
    <div className="bannerDiv" 
      style={{
        width,
        height,
        display: images.length === 2 ? "flex" : "block",
        justifyContent: "space-between",
        // marginTop: "1rem",
      }}
    >
      {images.map((image, idx) => {
        return (
          <img
            key={idx}
            src={image.img}
            alt="Banner Image"
            width={image.width}
          />
        );
      })}
    </div>
  );
};
