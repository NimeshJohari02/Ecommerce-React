import React from "react";
import "./button.style.scss";
const Button = ({ children, ...OtherProps }) => (
  <button className="custom-button" {...OtherProps}>
    {children}
  </button>
);
export default Button;
