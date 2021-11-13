import React from "react";
import "./CarbonFootCalculator2.css";
import {useHistory} from "react-router-dom"
function CarbonFootCalculator2() {
  const history = useHistory();
  const handleNextPage=()=>{
      history.push("/QuestionsMain");
  }
  return (
    <div className="tons-co">
      <div className="calorie-carbonSecond-page">
        <p>1.75</p>
      </div>
      <div className="calorie-carbonSecondCo2-page">
        <p>Tons CO2e</p>
      </div>
      <div className="arrow-up"></div>
      <div className="written-text-co2"></div>
      <div className="written-text1-co2"></div>
      <div className="written-text3-co2"></div>
      <button className="go-to-next" onClick={handleNextPage}>Next</button>
    </div>
  );
}

export default CarbonFootCalculator2;
