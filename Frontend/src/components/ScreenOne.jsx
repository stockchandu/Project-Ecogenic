import { SplashScreen } from "../components/SplashScreen";
import { groupOne,groupOneDot } from "../images/allImages";

export const ScreenOne = (props) => {
  return (
    <SplashScreen
      imgOne={groupOne}
      heading={"Eco-directory of brands"}
      para={
        " Find the right eco-friendly products from verfied brands listed by us"
      }
      imgOneDots={groupOneDot}
      handelPage={props.handelPage}
      handelSkip={props.handelSkip}
    />
  );
};
