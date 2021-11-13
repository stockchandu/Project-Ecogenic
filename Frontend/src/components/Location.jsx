import React from "react";
import "./Location.css";
import CountrySelect from "./CountrySelect";
import {useHistory} from "react-router-dom"

function Location() {
  const history = useHistory();
  const handleNextPage = () =>{
    history.push("/CarbonFootCalculator2");
  }
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
      <CountrySelect/>
      <button className="confirm-btn-country" onClick={handleNextPage}>Confirm</button>
    </div>
  );
}

export default Location;
