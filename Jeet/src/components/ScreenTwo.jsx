import { SplashScreen } from "../components/SplashScreen";
import imgOne from "../components/img/GroupTwo.png";
import imgOneDots from "../components/img/GroupTwoDots.png";
//import Arrow from "../components/img/GroupArrow.png";

export const ScreenTwo = (props) => {
  return (
    <SplashScreen
      imgOne={imgOne}
      heading={"Track your carbon-footprint"}
      para={
        "Get involved in the case to save our planet by tracking your carbon footprint."
      }
      imgOneDots={imgOneDots}
      handelPage={props.handelPage}
      handelSkip={props.handelSkip}
    />
  );
};
