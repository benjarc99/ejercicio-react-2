import React from "react";

const Photo = ({ src }) => {
  return (
    <>
      <div className="container-img-card">
        <img className="img-card" src={src} alt="" />
      </div>
    </>
  );
};

export default Photo;
