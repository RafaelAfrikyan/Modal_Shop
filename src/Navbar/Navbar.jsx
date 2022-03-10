import React from "react";
import "./Navbar.css";

const NavBar = ({ openPopUp }) => {
  return (
    <div className="NavBar">
      <img
        src="https://www.clipartmax.com/png/full/288-2889965_digital-commerce-platforms-from-stores-to-marketplaces-online-shopping-logo-png.png"
        alt="sorry"
      ></img>

      <img
        src="https://cdn-icons.flaticon.com/png/512/649/premium/649931.png?token=exp=1646809260~hmac=b6d0a8aa5162b816d2a0d45529ea33ff"
        onClick={openPopUp}
        // onMouseEnter={openPopUp}
        // onMouseLeave={openPopUp}
      ></img>
    </div>
  );
};

export default NavBar;
