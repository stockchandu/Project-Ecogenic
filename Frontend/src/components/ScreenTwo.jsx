import { SplashScreen } from "../components/SplashScreen";
import { groupTwo,groupTwoDots} from "../images/allImages";

export const ScreenTwo = (props) => {
  return (
    <SplashScreen
      imgOne={groupTwo}
      heading={"Track your carbon-footprint"}
      para={
        "Get involved in the case to save our planet by tracking your carbon footprint."
      }
      imgOneDots={groupTwoDots}
      handelPage={props.handelPage}
      handelSkip={props.handelSkip}
    />
  );
};
