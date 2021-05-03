import React from "react";
import "./button.style.scss";
const Button = ({ children, isGoogleSignIn, ...OtherProps }) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...OtherProps}
  >
    {children}
  </button>
);
export default Button;
