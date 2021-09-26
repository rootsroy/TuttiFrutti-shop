import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Header() {
  const myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };

  return (
    <nav>
      <div className="topnav" id="myTopnav">
        <a href="#orderhistory" className="active">
          Order History
        </a>
        <a href="#login">LogIn</a>
        <a href="#logout">Logout</a>
        <a href="#signup">Sign Up</a>
        <a href="javascript:void(0);" className="icon" onClick={myFunction}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </nav>
  );
}

export default Header;
