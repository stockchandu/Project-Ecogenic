import q1Img from "../Questions/img/unsplash_fdlZBWIP0aM.png";
import q2Img from "../Questions/img/arrow.png";
import "./QuestionThree.css";

import { useState } from "react";

export const QuestionThree = ({ handelPage, co2 }) => {
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
        <div className="chatBox2_3">Which best describes your diet?</div>
        <div className="botton_3"></div>
        <p className="qNumber_3">3 / 8 QUESTION</p>
        <div className="bar_3">
          <span className="dot_3" style={{ width: "36%" }}></span>
        </div>
        <p className="question_3">Select Your Diet Type</p>

        <div className="ckeck">
          <form>
            <input
              value="Vegan"
              checked={platformValue === "Vegan"}
              {...plaftormInputProps}
            />{" "}
            Vegan
            <br />
            <input
              value="Vegetarian"
              checked={platformValue === "Vegetarian"}
              {...plaftormInputProps}
            />{" "}
            Vegetarian
            <br />
            <input
              value="Pescatarian"
              checked={platformValue === "Pescatarian"}
              {...plaftormInputProps}
            />{" "}
            Pescatarian
            <br />
            <input
              value="I try to eat less meat"
              checked={platformValue === "I try to eat less meat"}
              {...plaftormInputProps}
            />{" "}
            I try to eat less meat
            <br />
            <input
              value="I eat everything"
              checked={platformValue === "I eat everything"}
              {...plaftormInputProps}
            />{" "}
            I eat everything
          </form>
        </div>

        <button className="clear_3" onClick={() => {}}>
          Clear
        </button>
        <button
          className="next_3"
          onClick={() => {
            //console.log(platformValue);

            handelPage(
              platformValue == "Vegan"
                ? 3
                : platformValue == "Vegetarian"
                ? 4
                : platformValue == "Pescatarian"
                ? 5
                : platformValue == "I try to eat less meat"
                ? 7
                : platformValue == "I eat everything"
                ? 9
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
