import React from "react";
import { FaBars } from "react-icons/fa";

import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="nav">
        <div className="nav-left">
          <p className="welcome">Welcome,</p>
          <h3>Manushri</h3>
        </div>
        <div className="nav-right">
          <FaBars />
        </div>
      </div>
    </>
  );
}

export { Navbar };
