import React from "react";
import Navbar from "./Navbar";
import "./Congrats.css"

export default function Congrats() {
  return (
    <div className="congrats">
      <Navbar />
      <img
        className="congrats-img"
        src="https://i.imgur.com/pYK41a0.png?1"
        alt="congrats-img"
      />
      <p>You booked this date:</p> 
      <p>Happy Dancing!</p> 
    </div>
  );
}
