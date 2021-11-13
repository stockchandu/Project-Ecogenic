import React from "react";
import imgFlag from "../Images/flag.png";
import "./CountrySelects.css";

function CountrySelects() {
  return (
    <div className="country-with-flag">
      <div>
        <img src={imgFlag} alt="snmnd" className="flag-img" />
      </div>
      <div className="options-country">
        <select name="" id="">
          <option>India</option>
          <option>France</option>
          <option>China</option>
          <option>Canada</option>
          <option>America</option>
        </select>
      </div>
    </div>
  );
}

export default CountrySelects;
