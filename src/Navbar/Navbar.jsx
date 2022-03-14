import React from "react";
import "./Navbar.css";

const NavBar = ({ openPopUp }) => {
  return (
    <div className="NavBar">
      <h1>Duna</h1>

      <div className="basket" onClick={openPopUp}>
        <img src="https://cdn-icons.flaticon.com/png/512/649/premium/649931.png?token=exp=1646809260~hmac=b6d0a8aa5162b816d2a0d45529ea33ff"></img>
        <p>Cart (0)</p>
      </div>
      
    </div>
  );
};

export default NavBar;
