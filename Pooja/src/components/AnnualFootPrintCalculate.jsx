import React from "react";
import "./AnnualFootPrintCalculate.css";
import { AiOutlineInfoCircle, AiOutlineArrowRight } from "react-icons/all";
import imgCircle from "../Images/circle.png";

function AnnualFootPrintCalculate() {
  return (
    <div className="annual-foot-print-one">
      <div className="annual-foot-print-one-content">
        <p>your carbon footprint</p>
        <AiOutlineInfoCircle className="info-logo" />

        <div>
          <img src={imgCircle} alt="sdh" className="cicle-image-footprint" />
        </div>
        <div className="start-tracking-footprinttt">
          <p>Start Tracking</p>
          <AiOutlineArrowRight className="arrow-footprint-calculate-ave" />
        </div>
        <div className="calculated-value-of-footprint">
          <p className="tons-of-co2-0">23.043</p>
          <p className="tons-of-co2-1">Tons of CO2</p>
        </div>
        <div className="desp-of-footprint">
          <p>
            Your annual footprint is
            <br /> below average
          </p>
        </div>
      </div>
    </div>
  );
}

export default AnnualFootPrintCalculate;
