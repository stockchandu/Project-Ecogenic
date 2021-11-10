import { useState, useEffect } from "react/cjs/react.development";
import styled from "styled-components";
import backImg from "./img/background.png";
import { CloseButton } from "./styledComponents/CloseButtonInCalculation";
const MainWrapperDiv = styled.div`
  background-image: url(${backImg});
  height: 1204px;
`;
const SecondWrapperDiv = styled.div`
  width: 90%;
  margin: auto;
`;
const StaticP = styled.p`
  text-align: center;
  font-family: "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  /* identical to box height */

  letter-spacing: 0.15em;
  margin-top: 20px;
  color: #ffffff;
`;

const CarbonValue = styled.p`
  text-align: center;
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 70px;
  line-height: 91px;
  /* identical to box height */

  /* letter-spacing: 0.15em; */
  margin-top: 25px;
  color: #ffffff;
`;
const TonsP = styled.p`
  text-align: center;
  margin-top: -5px;
  color: #ffffff;
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 29px;
  /* identical to box height */

  color: #ffffff;
`;
const HorizontalBarsDiv = styled.div`
  /* background-color: #3b3b3b; */
  height: 155px;
  margin-top: 30px;
  display: grid;
  grid-template-columns: 27% 72%;
  grid-gap: 1%;
`;
const LeftInHorDiv = styled.div`
  /* background-color: black; */
  height: 100px;
  & p {
    font-family: "DM Sans", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    color: #ffffff;
    margin-bottom: 45px;
  }
`;
const RightInHorDiv = styled.div`
  /* background-color: black; */
  height: 100px;
`;
const BelowCarbonDataBar = styled.div`
  /* background-color: white; */
  height: 136px;
  & :nth-child(1) {
    height: 68px;
    width: 38%;

    & :nth-child(1) {
      height: 9px;
      width: 100%;
      background-color: #25ce7b;
      border-radius: 4px;
    }
    & :nth-child(2) {
      float: right;
      margin-top: 5px;
      height: 26px;
      width: 85px;
      text-align: center;
      background-color: #ffffff;
      border-radius: 8px 0px 8px 8px;
    }
  }
  & :nth-child(2) {
    height: 68px;
    width: 100%;

    & :nth-child(1) {
      height: 9px;
      width: 100%;
      background-color: #25ce7b;
      border-radius: 4px;
    }
    & :nth-child(2) {
      float: right;
      margin-top: 5px;
      height: 26px;
      width: 85px;
      text-align: center;
      background-color: #ffffff;
      border-radius: 8px 0px 8px 8px;
    }
  }
`;
console.log(backImg);
export const AnnualCarbonFootprintShow = (props) => {
  const [carbonValue, setCarbonValue] = useState(0);

  // console.log(carbonValue, "carb.......................................");
  useEffect(() => {
    setCarbonValue(props.carbonFootprint.toFixed(2));
  }, []);
  const CarbonDataBar = styled.div`
    /* background-color: white; */
    height: 68px;
    width: ${() => {
      //console.log(Number(carbonValue));
      let percentage = (Number(carbonValue) / 4.5) * 100;
      //console.log(percentage);

      return `${percentage}%`;
    }};
    margin-top: 3px;
    & :nth-child(1) {
      height: 9px;
      background-color: #feb700;
      border-radius: 4px;
    }
    & :nth-child(2) {
      float: right;
      margin-top: 5px;
      height: 26px;
      width: 85px;
      text-align: center;
      background-color: #ffffff;
      border-radius: 8px 0px 8px 8px;
    }
  `;
  return (
    <MainWrapperDiv>
      <SecondWrapperDiv>
        <CloseButton></CloseButton>
        <StaticP>YOUR ANNUAL CARBON FOOTPRINT</StaticP>
        <CarbonValue>{carbonValue}</CarbonValue>
        <TonsP>Tons of CO2</TonsP>
        <HorizontalBarsDiv>
          <LeftInHorDiv>
            <p>You</p>
            <p>Avg India</p>
            <p>Avg World</p>
          </LeftInHorDiv>
          <RightInHorDiv>
            <CarbonDataBar>
              <div></div>
              <div>{carbonValue} Tons</div>
            </CarbonDataBar>
            <BelowCarbonDataBar>
              <div>
                <div></div>
                <div>1.75 Tons</div>
              </div>
              <div>
                <div></div>
                <div>4.50 Tons</div>
              </div>
            </BelowCarbonDataBar>
          </RightInHorDiv>
        </HorizontalBarsDiv>
      </SecondWrapperDiv>
    </MainWrapperDiv>
  );
};
