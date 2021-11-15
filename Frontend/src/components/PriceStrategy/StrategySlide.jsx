import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import mobilityImage from "./img/mobility.png";
import shelterimage from "./img/shelter.png";
import foodImage from "./img/food.png";
import "./SliderCss.css";
import { CloseButton } from "./styledComponents/CloseButtonInCalculation";
import styled from "styled-components";
import { useEffect } from "react/cjs/react.development";

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
  left: 205px;
  top: 70px;
  font-family: "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: bold !important;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.308657px;

  color: #ffffff;
`;

const HundredShow = styled.div`
  /* margin-top: 0px; */
  background-color: #1da1f2;
  color: white;
  position: absolute;
  width: 48px;
  height: 25px;
  border-radius: 14px;
  left: 255px;
  top: 105px;

  font-weight: bold;
  font-size: 13.8613px;
  line-height: 18px;

  text-align: center;
  letter-spacing: -0.225685px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #ffffff;
`;
const SliderWrapDiv = styled.div`
  width: 87%;
  margin: auto;
  /* background-color: #dbc9c9; */
  & .carousel{
    & .dot{
    position:relative; 
  } 
  }
`;
const DynamicBorder = styled.div`
  position: absolute;
  top: 30px;
  left: 32px;
  width: 296px;
  height: 386px;
  border: 10px solid #25ce7b;
  border-radius: 46px;
`;
const Label = styled.div`
  margin-top: -245px;
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
  margin-top: 40px;
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
  height: 135px;
`;
const AllCategories = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 32px;
  /* width: 235px; */
  border: none;
  height: 64px;
  margin: auto;
  background: #2c7fff;
  border-radius: 8px;
  margin-top: -20px;
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0.1040752px;

  color: #ffffff;
`;
export function StrategySlider(props) {
  //console.log(props.strategySelection, "inside slider object.......");
  //   useEffect(() => {
  //     console.log("useeffect working");
  //   }, [props.strategySelection]);




  return (
    <>
      <CloseButton color="black"></CloseButton>
      <HeadingStrategyDiv>Strategy</HeadingStrategyDiv>
      <Para>
        How do you want to neutralize your {props.carbonFootprint} ton carbon
        footprint?
      </Para>
      <SliderWrapDiv>
        {" "}
        <Carousel id="myCarousal"  >
          <div>
            <AddButton
              onClick={() => {
                props.handleStrategySelection("mobility");
              }}
            >
              {" "}
              {props.strategySelection.mobility ? "👍 Added" : "+ Add"}
            </AddButton>
            <HundredShow
              style={{
                display: props.strategySelection.mobility ? "flex" : "none",
              }}
            >
              100%
            </HundredShow>
            <DynamicBorder
              style={{
                display: props.strategySelection.mobility ? "block" : "none",
              }}
              onClick={() => {
                props.handleStrategySelection("mobility");
              }}
            ></DynamicBorder>
            <img src={mobilityImage} alt="" />

            <Label>Mobility</Label>
            <LearnMore>Learn More ►</LearnMore>
          </div>
          <div>
            <AddButton
              onClick={() => {
                props.handleStrategySelection("shelter");
              }}
            >
              {" "}
              {props.strategySelection.shelter ? "👍 Added" : "+ Add"}
            </AddButton>
            <HundredShow
              style={{
                display: props.strategySelection.shelter ? "flex" : "none",
              }}
            >
              100%
            </HundredShow>
            <DynamicBorder
              style={{
                display: props.strategySelection.shelter ? "block" : "none",
              }}
              onClick={() => {
                props.handleStrategySelection("shelter");
              }}
            ></DynamicBorder>

            <img src={shelterimage} alt="" />
            <Label>Shelter</Label>
            <LearnMore>Learn More ►</LearnMore>
          </div>
          <div>
            <AddButton
              onClick={() => {
                props.handleStrategySelection("food");
              }}
            >
              {props.strategySelection.food ? "👍  Added" : "+ Add"}
            </AddButton>
            <HundredShow
              style={{
                display: props.strategySelection.food ? "flex" : "none",
              }}
            >
              100%
            </HundredShow>
            <DynamicBorder
              style={{
                display: props.strategySelection.food ? "block" : "none",
              }}
              onClick={() => {
                props.handleStrategySelection("food");
              }}
            ></DynamicBorder>
            <img src={foodImage} alt="" />
            <Label>Food</Label>
            <LearnMore>Learn More ►</LearnMore>
            <Spacer></Spacer>
          </div>
        </Carousel>
      </SliderWrapDiv>

      <AllCategories
        onClick={() => {
          props.strategySelection.mobility ||
          props.strategySelection.shelter ||
          props.strategySelection.food
            ? props.handleStrategySelection("save")
            : props.handleStrategySelection("all");
        }}
      >
        {props.strategySelection.mobility ||
        props.strategySelection.shelter ||
        props.strategySelection.food
          ? "Save Strategy"
          : "Select all categories"}
      </AllCategories>
    </>
  );
}
