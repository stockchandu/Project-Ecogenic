import q1Img from "../Questions/img/unsplash_4NhqyQeErP8.png";
import q2Img from "../Questions/img/arrow.png";
import "./QuestionThree.css";

import { useState } from "react";

export const QuestionEight = ({ handelPage, co2 }) => {
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
        <div className="chatBox2_3" style={{ width: 380 }}>
          last question, do you have renewable electricity at home?
        </div>
        <div className="botton_3"></div>
        <p className="qNumber_3">8 / 8 QUESTION</p>
        <div className="bar_3">
          <span className="dot_3" style={{ width: "100%" }}></span>
        </div>

        <div className="ckeck">
          <form>
            <input
              value="Yes"
              checked={platformValue === "Yes"}
              {...plaftormInputProps}
            />{" "}
            Yes
            <br />
            <input
              value="Not yet"
              checked={platformValue === "Not yet"}
              {...plaftormInputProps}
            />{" "}
            Not yet
            <br />
            <input
              value="Not sure"
              checked={platformValue === "Not sure"}
              {...plaftormInputProps}
            />{" "}
            Not sure
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
              platformValue == "Yes"
                ? 2
                : platformValue == "Not yet"
                ? 3
                : platformValue == "Not sure"
                ? 5
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
