import React from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { AiFillStar } from "react-icons/all";
import "./homepage.css"

function BareNecessities() {
  return (
    <div className="ecohoy-container">
      <div className="bare-pic">
        <div>
          <div className="rating-bare">
            <span className="rating-value">4.2</span>
            <AiFillStar className="four-star" />
          </div>
        </div>
        <div className="arrow-icon">
          <FaAngleLeft className="arrow-icon-left" />
          <FaAngleRight className="arrow-icon-right" />
        </div>
      </div>
      <div className="ecohoy-content">
        <h4 className="ecohoy-heading">Bare Necessities</h4>
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

export default BareNecessities;
