import React from "react";
import "./homepage.css"
import { ImArrowRight2 } from "react-icons/all";

function EcoFriendly() {
  return (
    <div className="bottom-container">
      <div className="tree-image"></div>
      <div className="bottom-last">
        <div className="tree-content">
          <h3 className="tree-heading">Eco-friendly hacks at home</h3>
          <div className="subheading-container">
            <p className="tree-subheading">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              <br /> elit. Donec volutpat elit convallis odio sagittis ornare.
              <br />
              Donec libero risus, aliquet a mi ut, consectetur
              <br /> pellentesque lorem.
            </p>
          </div>
        </div>
        <div className="like">
          <div className="like-logo">
            <div className="like-image">👍</div>
            <div className="like-image">👌</div>
            <div className="like-image2">+ 50 Others</div>
          </div>
          <div className="read-more">
            <span className="read-content">Read more</span>
            <ImArrowRight2 className="read-arrow" />
          </div>
        </div>
        <div>
          <hr className="hori-line" />
        </div>

        <div className="bottom-last">
          <div className="profile-image"></div>
          <div className="name">
            <p className="manu">
              Manushri Dave <span className="days"> . 3 days ago</span>
            </p>
            <span className="profile-content">
              Posted in The Eco-Monthly Challenge
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EcoFriendly;
