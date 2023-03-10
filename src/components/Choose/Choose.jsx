import React from "react";
import "./Choose.css";

export default function Choose({ text }) {

  return (
    <div className="choose__container">
      <p>{text}</p>
      <button type="button" onClick={handleClick}>x</button>
    </div>
  );
}
