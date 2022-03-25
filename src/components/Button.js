import React from "react";
import "./Button.css";

const Button = () => {
  let buttons = ["Follow", "Unfollow", "AddFriend", "Hire", "View Proyect"];

  return (
    <>
      <button className="action-card">
        {buttons[Math.round(Math.random() * 4)]}
      </button>
    </>
  );
};

export default Button;
