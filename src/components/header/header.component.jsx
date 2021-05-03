import React from "react";
import { ReactComponent as Logo } from "../../assets/image.svg";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import "./header.styles.scss";
const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="options" to="/shop">
        SHOP
      </Link>
      <Link className="options" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div
          className="options"
          onClick={() => {
            auth.signOut();
          }}
        >
          Sign Out
        </div>
      ) : (
        <Link className="options" to="/signin">
          Sign In
        </Link>
      )}
    </div>
  </div>
);
export default Header;
