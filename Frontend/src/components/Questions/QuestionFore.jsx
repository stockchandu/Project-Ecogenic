import q1Img from "../Questions/img/unsplash_Jk3-Uhdwjcs.png";
import q2Img from "../Questions/img/arrow.png";
import "./QuestionThree.css";

import { useState } from "react";

export const QuestionFore = ({ handelPage, co2 }) => {
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
        <div className="chatBox2_3">
          Is a car part of your regular mobility?
        </div>
        <div className="botton_3"></div>
        <p className="qNumber_3">4 / 8 QUESTION</p>
        <div className="bar_3">
          <span className="dot_3" style={{ width: "48%" }}></span>
        </div>
        {/* <p className="question_3">Select Your Diet Type</p> */}

        <div className="ckeck">
          <form>
            <input
              value="No"
              checked={platformValue === "No"}
              {...plaftormInputProps}
            />{" "}
            No
            <br />
            <input
              value="I do car-sharing"
              checked={platformValue === "I do car-sharing"}
              {...plaftormInputProps}
            />{" "}
            I do car-sharing
            <br />
            <input
              value="Yes"
              checked={platformValue === "Yes"}
              {...plaftormInputProps}
            />{" "}
            Yes
            <br />
            <input
              value="Yes, but electric"
              checked={platformValue === "Yes, but electric"}
              {...plaftormInputProps}
            />{" "}
            Yes, but electric
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
              platformValue == "No"
                ? 2
                : platformValue == "I do car-sharing"
                ? 4
                : platformValue == "Yes"
                ? 6
                : platformValue == "Yes, but electric"
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
