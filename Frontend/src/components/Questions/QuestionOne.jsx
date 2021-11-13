import q1Img from "../Questions/img/unsplash_M0AWNxnLaMw.png";
import q2Img from "../Questions/img/arrow.png";
import "./Question.css";
import { Wrapper, Range } from "./StyleCompnent/RangeSlider";
import { useState } from "react";

export const QuestionOne = ({ handelPage, co2 }) => {
  const [val, setVal] = useState(1);
  const handelRangeChange = ({ target }) => {
    setVal(target.value);
  };
  return (
    <>
      <div className="continer">
        <img src={q1Img} className="img" />
        <img src={q2Img} className="arrow" />
        <p className="carbonCount">{co2}</p>
        <p className="Unit">Tons CO2e</p>
        <div className="chatBox1">
          Estimate how many long-haul trips by plane you take in a typical year
        </div>
        <div className="chatBox2">
          Those are roundtrips over three hours each way
        </div>
        <div className="botton">
          <p className="qNumber">1 / 8 QUESTION</p>
          <div className="bar">
            <span className="dot" style={{ width: "12%" }}></span>
          </div>
          <p className="question">Number of Roundtrips</p>
          <div className="rangeSlider">
            <Wrapper>
              <Range
                type="range"
                value={val}
                onChange={handelRangeChange}
                min={1}
                max={10}
                step={1}
              />
            </Wrapper>
          </div>

          <button
            className="clear1"
            onClick={() => {
              setVal(1);
              console.log(val);
            }}
          >
            Clear
          </button>
          <button
            className="next"
            onClick={() => {
              console.log(val);
              handelPage(val);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};
