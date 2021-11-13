import React from "react";
import "./DailyChallenges.css";
import { ImArrowRight2 } from "react-icons/all";
import img3 from "../Images/unsplash_ILip77SbmOE.png";
import img4 from "../Images/⭐ 20 points.png";

function DailyChallenges() {
  return (
    <>
      <div className="daily">
        <div className="dailyChallenge">
          <span className="dailyContent">DAILY CHALLENGES</span>
          <span className="star">
            <img src={img4} alt="dsh" />
          </span>
        </div>

        <div className="text-middle">
          <p className="spanText">
            Speak about substainability with min,
            <br /> two friends
          </p>
        </div>
        <div className="joined-people">
          <span>
            <img src={img3} alt="imq" />
          </span>
          <span className="joined-people-two">
            <img src={img3} alt="emw" />
          </span>
          <span className="joined-people-three">
            <img src={img3} alt="emjd" />
          </span>

          <span className="fifty-six">56 people joined already </span>

          <ImArrowRight2 className="daily-arrow" />
        </div>
      </div>
    </>
  );
}

export { DailyChallenges };
