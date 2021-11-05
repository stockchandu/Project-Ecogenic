import { SplashScreen } from "../components/SplashScreen";
import imgOne from "../components/img/GroupOne.png";
import imgOneDots from "../components/img/GroupOneDots.png";
//import Arrow from "../components/img/GroupArrow.png";

export const ScreenOne = (props) => {
  return (
    <SplashScreen
      imgOne={imgOne}
      heading={"Eco-directory of brands"}
      para={
        " Find the right eco-friendly products from verfied brands listed by us"
      }
      imgOneDots={imgOneDots}
      handelPage={props.handelPage}
      handelSkip={props.handelSkip}
    />
  );
};
