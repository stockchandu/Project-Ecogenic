import React from "react";
import "../CarbonFootCalculator/Location.css";

function Location() {
  return (
    <div className="country-select-container">
      <div className="middle-element"></div>
      <div className="residence">
        <p className="resi-country">Select Your Country Of Residence</p>
      </div>
      <div className="select-country-of-resi">
        <span>
          By selecting you country we can determine the right
          <br /> values for calculating your carbon footprint.
        </span>
      </div>

      <button className="confirm-btn-country ">Confirm</button>
    </div>
  );
}

export default Location;
