import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, size, imageUrl }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <div className="content">
      <div className="title">{title.toUpperCase()}</div>
      <span className="subtitle">Shop Now</span>
    </div>
  </div>
);

export default MenuItem;
