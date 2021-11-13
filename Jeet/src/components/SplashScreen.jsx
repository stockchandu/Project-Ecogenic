import "./SplashScreen.css";
import Arrow from "../components/img/GroupArrow.png";

export const SplashScreen = (props) => {
  return (
    <div className="wrapper">
      <div className="topContiner">
        <img src={props.imgOne} className="img1" />
        <p className="heading">{props.heading}</p>
        <p className="para">{props.para}</p>
        <img src={props.imgOneDots} className="dots" />
      </div>
      <div className="bottomContiner">
        <p
          className="skip"
          onClick={() => {
            props.handelSkip();
          }}
        >
          Skip
        </p>
        <img
          src={Arrow}
          className="Arrow"
          onClick={() => {
            props.handelPage();
          }}
        />
      </div>
    </div>
  );
};
