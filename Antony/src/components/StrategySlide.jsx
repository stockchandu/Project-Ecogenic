import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import mobilityImage from "./img/mobility.png";
import shelterimage from "./img/shelter.png";
import foodImage from "./img/food.png";
import "./SliderCss.css";
import { CloseButton } from "./styledComponents/CloseButtonInCalculation";
import styled from "styled-components";

const HeadingStrategyDiv = styled.div`
  text-align: center;
  margin-top: -35px;
  font-family: "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 35px;
  /* identical to box height */

  letter-spacing: -0.32px;

  /* Gray - 900 */

  color: #212529;
`;

const Para = styled.p`
  text-align: center;
  width: 292px;
  height: 52px;
  margin: auto;
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  /* letter-spacing: -0.32px; */

  /* Gray - 800 */
  margin-top: 76px;
  color: #343a40;
`;

const AddButton = styled.div`
  width: 93px;
  height: 43px;
  border-radius: 34px;
  display: flex;
  /* z-index: 100000000000000000; */
  /* margin: auto; */
  justify-content: center;
  align-items: center;
  /* padding: 6px 28px; */
  margin-top: 0px;
  background-color: #25ce7b;
  color: white;
  position: absolute;
  width: 93px;
  height: 43px;
  left: 231px;
  top: 70px;
  font-family: "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.308657px;

  color: #ffffff;
`;

const Label = styled.div`
  margin-top: -285px;
  font-family: "Segoe UI", sans-serif;
  font-style: normal;

  font-size: 50px;
  line-height: 67px;
  /* identical to box height */

  text-align: center;
  /* letter-spacing: -0.429699px; */
  font-weight: 800 !important;
  color: #ffffff;
`;
const LearnMore = styled.div`
  margin-top: 50px;
  font-family: "Segoe UI", sans-serif;
  font-style: normal;

  font-size: 18px;
  line-height: 24px;
  /* identical to box height */
  font-weight: 700 !important;
  text-align: center;

  color: #ffffff;
`;
const Spacer = styled.div`
  height: 170px;
`;
export function StrategySlider(props) {
  return (
    <>
      <CloseButton color="black"></CloseButton>
      <HeadingStrategyDiv>Strategy</HeadingStrategyDiv>
      <Para>
        How do you want to neutralize your {props.carbonFootprint} ton carbon
        footprint?
      </Para>
      <Carousel>
        <div>
          <AddButton>+ Add</AddButton>
          <img src={mobilityImage} alt="" />

          <Label>Mobility</Label>

          <LearnMore>Learn More ►</LearnMore>
        </div>
        <div>
          <img src={shelterimage} alt="" />
          <Label>Shelter</Label>
          <LearnMore>Learn More ►</LearnMore>
        </div>
        <div>
          <img src={foodImage} alt="" />
          <Label>Food</Label>
          <LearnMore>Learn More ►</LearnMore>
          <Spacer></Spacer>
        </div>
      </Carousel>
    </>
  );
}

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
