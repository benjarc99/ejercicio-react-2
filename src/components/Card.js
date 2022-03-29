import React from "react";
import Photo from "./Photo";
import Button from "./Button";

const Card = ({ name, img, email }) => {
  return (
    <div className="card">
      <Photo src={img} />
      <h4>{`${name}`}</h4>
      <div className="text-card">{email}</div>
      <Button />
    </div>
  );
};

export default Card;
