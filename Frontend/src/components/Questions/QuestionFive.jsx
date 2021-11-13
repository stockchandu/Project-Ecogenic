import q1Img from "../Questions/img/unsplash_WiE01mC9AtY.png";
import q2Img from "../Questions/img/arrow.png";
import "./QuestionThree.css";

import { useState } from "react";

export const QuestionFive = ({ handelPage, co2 }) => {
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
        <div className="chatBox2_3" style={{ width: 206, height: 56 }}>
          How do you shop?
        </div>
        <div className="botton_3"></div>
        <p className="qNumber_3">5 / 8 QUESTION</p>
        <div className="bar_3">
          <span className="dot_3" style={{ width: "60%" }}></span>
        </div>
        {/* <p className="question_3">Select Your Diet Type</p> */}

        <div className="ckeck">
          <form>
            <input
              value="Frugal"
              checked={platformValue === "Frugal"}
              {...plaftormInputProps}
            />{" "}
            Frugal
            <br />
            <input
              value="Average"
              checked={platformValue === "Average"}
              {...plaftormInputProps}
            />{" "}
            Average
            <br />
            <input
              value="Shopper"
              checked={platformValue === "Shopper"}
              {...plaftormInputProps}
            />{" "}
            Shopper
            <br />
            <input
              value="Luxury shopper"
              checked={platformValue === "Luxury shopper"}
              {...plaftormInputProps}
            />{" "}
            Luxury shopper
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
            handelPage(platformValue == "Frugal"
            ? 1.5
            : platformValue == "Average"
            ? 3
            : platformValue == "Shopper"
            ? 5
            : platformValue == "Luxury shopper"
            ? 7
            : 0);
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};
