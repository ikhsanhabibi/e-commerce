import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import "./header.styles.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/logo/crown.svg";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option">
          <DropdownButton
            alignRight
            title={"HELLO "}
            id="dropdown-menu-align-right"
          >
            <Dropdown.Item eventKey="1">DASHBOARD</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="2" onClick={() => auth.signOut()}>
              SIGN OUT
            </Dropdown.Item>
          </DropdownButton>
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

const mapStatetoProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStatetoProps)(Header);
