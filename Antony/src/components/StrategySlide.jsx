import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import mobilityImage from "./img/mobility.png";
import shelterimage from "./img/shelter.png";
import foodImage from "./img/food.png";
import "./SliderCss.css";
export function StrategySlider() {
  return (
    <Carousel>
      <div>
        <img src={mobilityImage} alt="" />
      </div>
      <div>
        <img src={shelterimage} alt="" />
      </div>
      <div>
        <img src={foodImage} alt="" />
      </div>
    </Carousel>
  );
}

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
