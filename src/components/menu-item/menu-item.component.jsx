import React from "react";
import { withRouter } from "react-router-dom";
//with Router is a function that takes a component as input and then returns
// It as a component with some changes
import "./menu-items.style.scss";
const MenuItem = ({ title, imageUrl, size, id, linkUrl }) => (
  <div className={`menu-item ${size}`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()} </h1>
      <span className="subtitle"> SHOP NOW </span>
    </div>
  </div>
);
export default withRouter(MenuItem);
