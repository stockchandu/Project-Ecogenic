import React from "react";
import "../components/DailyChallenges.css";
import { ImArrowRight2 } from "react-icons/all";
import img3 from "../Images/unsplash_ILip77SbmOE.png";

import { TiStarFullOutline } from "react-icons/all";

function DailyChallenges() {
  return (
    <>
      <div className="daily">
        <div className="dailyChallenge">
          <span className="dailyContent">DAILY CHALLENGES</span>
          <span className="star">
            <TiStarFullOutline style={{ marginLeft: "10px" }} />
            20 points
          </span>
        </div>

        <div className="text-middle">
          <h6 className="spanText">
            Speak about substainability with min,
            <br /> two friends
          </h6>
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
