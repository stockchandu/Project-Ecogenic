import { SplashScreen } from "../components/SplashScreen";
import { groupThree,groupThreeDots } from "../images/allImages";

export const ScreenThree = (props) => {
  return (
    <SplashScreen
      imgOne={groupThree}
      heading={"Informative Blogs "}
      para={
        "Learn about sustainability from interesting blogs and make your sustianable choices"
      }
      imgOneDots={groupThreeDots}
      handelPage={props.handelPage}
      handelSkip={props.handelSkip}
    />
  );
};
