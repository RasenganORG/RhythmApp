import React from "react";
import "./NewsPage.css";
import Navbar from "./Navbar";
import CardEvent from "./CardEvent";
import { Card } from "antd";

export default function NewsPage() {
  return (
    <div className="news-page">
      <Navbar />
      <div className="news-page-title-bg">
        <h1 className="news-page-title">The New Hip-Hop Class Is Now Open</h1>
        <h3 className="news-page-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit
          justo ut imperdiet rhoncus. Maecenas congue sapien eget congue
          blandit. Phasellus iaculis tempus fringilla.
        </h3>
      </div>
      {/* banner with title */}

      {/* image */}
      <img
        className="news-page-img"
        src="https://i.imgur.com/3hA7ufG.jpg"
        alt="dace-img"
      />

      {/* text */}
      <p className="news-page-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit
        justo ut imperdiet rhoncus. Maecenas congue sapien eget congue blandit.
        Phasellus iaculis tempus fringilla. Quisque orci leo, posuere et quam
        eget, rutrum suscipit neque. Aliquam laoreet nisi eu mauris pretium
        imperdiet. Mauris luctus gravida nisi, ac molestie nisi gravida sit
        amet. Aenean id porta lorem, ac condimentum libero. Ut turpis tortor,
        tristique a diam vitae, mollis condimentum erat. Maecenas lacus orci,
        placerat eget mauris at, finibus pretium arcu. Vestibulum at felis eget
        purus pellentesque porta ac eget libero. Aliquam et lacus sed metus
        
      </p>
      {/* some buttons */}
    </div>
  );
}
