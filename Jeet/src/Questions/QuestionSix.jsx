import q1Img from "../Questions/img/unsplash_R-LK3sqLiBw.png";
import q2Img from "../Questions/img/arrow.png";
import "./QuestionThree.css";

import { useState } from "react";

export const QuestionSix = ({ handelPage, co2 }) => {
  const [platformValue, plaftormInputProps] = useRadioButtons("platform");

  function useRadioButtons(name) {
    const [value, setState] = useState(null);

    const handleChange = (e) => {
      setState(e.target.value);
    };

    const inputProps = {
      name,
      type: "radio",
      onChange: handleChange,
    };

    return [value, inputProps];
  }

  return (
    <>
      <div className="continer">
        <img src={q1Img} className="img" />
        <img src={q2Img} className="arrow" />
        <p className="carbonCount" style={{ color: "#FFFFFF" }}>
          {co2}
        </p>
        <p className="Unit" style={{ color: "#FFFFFF" }}>
          Tons CO2e
        </p>
        <div className="chatBox2_3" style={{ width: 246, height: 56 }}>
          How big is your home?
        </div>
        <div className="botton_3"></div>
        <p className="qNumber_3">6 / 8 QUESTION</p>
        <div className="bar_3">
          <span className="dot_3" style={{ width: "72%" }}></span>
        </div>

        <div className="ckeck">
          <form>
            <input
              value="Large house"
              checked={platformValue === "Large house"}
              {...plaftormInputProps}
            />{" "}
            Large house
            <br />
            <input
              value="Medium-sized house"
              checked={platformValue === "Medium-sized house"}
              {...plaftormInputProps}
            />{" "}
            Medium-sized house
            <br />
            <input
              value="Small house"
              checked={platformValue === "Small house"}
              {...plaftormInputProps}
            />{" "}
            Small house
            <br />
            <input
              value="Apartment"
              checked={platformValue === "Apartment"}
              {...plaftormInputProps}
            />{" "}
            Apartment
            <br />
          </form>
        </div>

        <button className="clear_3" onClick={() => {}}>
          Clear
        </button>
        <button
          className="next_3"
          onClick={() => {
            console.log(platformValue);
            handelPage(
              platformValue == "Large house"
                ? 2
                : platformValue == "Medium-sized house"
                ? 3.2
                : platformValue == "Small house"
                ? 5.5
                : platformValue == "Apartment"
                ? 7
                : 0
            );
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};
