import React from "react";
import { ImArrowRight2 } from "react-icons/all";
import "./homepage.css"
import {useHistory} from "react-router-dom"
import AnnualFootPrintCalculate from "./AnnualFootPrintCalculate";
function CarbonFootCal() {
  const history = useHistory();
  const handleNextPage = () =>{
    history.push("/Location");
  }

  let status = localStorage.getItem("status")
  return (
    <>
      {
        status=="true"?(
          <AnnualFootPrintCalculate/>
        ):(
          <div>
          <button className="btn" onClick={handleNextPage}>
            Calculate your carbon footprint
            <ImArrowRight2 className="arrow" />
          </button>
        </div>
        )
      }
    </>
  );
}

export { CarbonFootCal };
