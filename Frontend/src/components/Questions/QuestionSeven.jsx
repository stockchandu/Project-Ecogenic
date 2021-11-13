import { useState } from "react";
import "./questionSeven.css";

const QuestionSeven = ({ handelPage , co2}) => {
  const [num, setNum] = useState(0);
  

  const handlePlus = () => {
    setNum(num + 1);
    //setEmi((emi+0.2))
  };


  const handleMinus = () => {
    //setEmi(emi-0.2)
    setNum(num - 1);
  };

  const handleSkip = () => {
    //setEmi(2.84)
    setNum(0);
  };

  return (
    <div>
      <img
        id="back-img"
        src="https://imagesdataporter.s3.ap-south-1.amazonaws.com/Eco-Resource/rounak/images/unsplash_4NhqyQeErP8.png"
        alt="none"
      />
      <div id="emission">{co2}</div>
      <div id="ton">Tons CO2e</div>
      <div id="chat-1">
        <p id="chat-text">How many people leave in your home?</p>
      </div>
      <div id="rect">
        <img
          id="arr"
          src="https://imagesdataporter.s3.ap-south-1.amazonaws.com/Eco-Resource/rounak/images/Group+1999.png"
          alt="none"
        />
        <img
          id="que"
          src="https://imagesdataporter.s3.ap-south-1.amazonaws.com/Eco-Resource/rounak/images/Component+13.png"
          alt="none"
        />
        <div id="btn">
          <p id="ppl">People</p>
          <div onClick={handleMinus} id="mbtn">
            <img
              id="msign"
              src="https://imagesdataporter.s3.ap-south-1.amazonaws.com/Eco-Resource/rounak/images/Vector.png"
              alt="none"
            />
          </div>
          <div id="num">{num}</div>
          <div id="pbtn" onClick={handlePlus}>
            <div id="psign">+</div>
          </div>
        </div>
        {num > 0 ? (
          <div>
            <div
              
              id="next1"
              onClick={() => {
                console.log(num);
                handelPage(num);
              }}
            >
              Next
            </div>
            <div id="skip1" onClick={handleSkip}>
              Clear
            </div>
          </div>
        ) : (
          <div>
            <div id="next">Next</div>
            <div id="skip">Skip</div>
          </div>
        )}
      </div>
    </div>
  );
};

export { QuestionSeven };
