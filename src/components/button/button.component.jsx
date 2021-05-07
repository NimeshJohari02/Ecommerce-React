import React from "react";
import "./button.style.scss";
const Button = ({ children, isGoogleSignIn, inverted, ...OtherProps }) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} ${
      inverted ? "inverted" : ""
    } custom-button`}
    {...OtherProps}
  >
    {children}
  </button>
);
export default Button;
