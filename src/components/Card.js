import React from "react";
import Photo from "./Photo";
import Button from "./Button";

const Card = ({ el, i }) => {
  return (
    <div key={i} className="card">
      <Photo src={el.avatar} />
      <h4>{`${el.first_name} ${el.last_name}`}</h4>
      <div className="text-card">{el.email}</div>
      <Button />
    </div>
  );
};

export default Card;
