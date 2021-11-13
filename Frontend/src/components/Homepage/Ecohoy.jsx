import React from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import "./homepage.css"
import Menu from "./Menu";

function Ecohoy() {
  return (
    <div className="ecohoy-container">
      <div className="ecohoy-pic">
        <Menu />
        <div className="arrow-icon">
          <FaAngleLeft className="arrow-icon-left" />
          <FaAngleRight className="arrow-icon-right" />
        </div>
      </div>
      <div className="ecohoy-content">
        <h4 className="ecohoy-heading">Ecohoy</h4>
        <span className="ecohoy-subheading">
          Everyday green products, eco-friendly & sustainable.
        </span>
        <div className="address">
          <div className="ecohoy-logo "></div>
          <div>
            <span>Fair Trade India, IDO 140001</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecohoy;
