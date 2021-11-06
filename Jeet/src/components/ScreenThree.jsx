import { SplashScreen } from "../components/SplashScreen";
import imgOne from "../components/img/GroupThree.png";
import imgOneDots from "../components/img/GroupThreeDots.png";
//import Arrow from "../components/img/GroupArrow.png";

export const ScreenThree = (props) => {
  return (
    <SplashScreen
      imgOne={imgOne}
      heading={"Informative Blogs "}
      para={
        "Learn about sustainability from interesting blogs and make your sustianable choices"
      }
      imgOneDots={imgOneDots}
      handelPage={props.handelPage}
      handelSkip={props.handelSkip}
    />
  );
};
