import React from "react";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { SelectCartHidden } from "../../redux/cart/cart.selectors";
import CartIcon from "../cart-icon/cart-icon.component";
import { ReactComponent as Logo } from "../../assets/image.svg";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import "./header.styles.scss";
const Header = ({ currentUser, hidden }) => (
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
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);
//This is an advance way to destrcture the state ie from user get CurrentUser and from cart get Hidden and since key and value have
// the same name they can be passed like normal arguments or currentUser:currentUser, hidden:hidden
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: SelectCartHidden,
});
export default connect(mapStateToProps)(Header);
