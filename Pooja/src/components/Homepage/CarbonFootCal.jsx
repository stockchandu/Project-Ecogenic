import React from "react";
import { ImArrowRight2 } from "react-icons/all";
import "../App.css";

function CarbonFootCal() {
  return (
    <>
      <div>
        <button className="btn">
          Calculate your carbon footprint
          <ImArrowRight2 className="arrow" />
        </button>
      </div>
    </>
  );
}

export { CarbonFootCal };
