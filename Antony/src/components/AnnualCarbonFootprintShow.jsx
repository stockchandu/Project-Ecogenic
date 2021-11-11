import { useState, useEffect } from "react/cjs/react.development";
import styled from "styled-components";
import backImg from "./img/background.png";
import svg from "./img/Vector.svg";
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
  & > :nth-child(1) {
    height: 68px;
    width: 38%;

    & > :nth-child(1) {
      height: 9px;
      width: 100%;
      background-color: #25ce7b;
      border-radius: 4px;
    }
    & > :nth-child(2) {
      float: right;
      margin-top: 5px;
      height: 26px;
      width: 85px;
      text-align: center;
      background-color: #ffffff;
      border-radius: 8px 0px 8px 8px;
    }
  }
  & > :nth-child(2) {
    height: 68px;
    width: 100%;

    & > :nth-child(1) {
      height: 9px;
      width: 100%;
      background-color: #25cea5;
      border-radius: 4px;
    }
    & > :nth-child(2) {
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

const HeadingUnderstand = styled.p`
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 26px;
  margin-top: 83px;
  color: #ffffff;
`;
const VerticalBarsDiv = styled.div`
  /* background-color: #3b3b3b; */
  height: 185px;
  margin-top: -10px;
  display: grid;
  grid-template-columns: 18% 18% 18% 18% 18%;
  grid-gap: 2.4%;
`;

const HeadingMoreOptions = styled.p`
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 26px;
  /* identical to box height */
  margin-top: 55px;
  color: #ffffff;
`;
const MoreOptionsWrapper = styled.div`
  background: #ffffff;
  border-radius: 8px;
  height: 84px;
  margin-top: 16px;
  display: grid;
  grid-template-columns: 90% 10%;
  justify-content: center;
  align-items: center;
  & > :nth-child(1) {
    font-family: "Segoe UI", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0px;
    width: 90%;
    margin: auto;
    color: #212529;
    /* background-color: #856c6c; */
  }
  & > :nth-child(2) {
    /* background-color: #856c6c; */
    align-items: center;
    margin-right: 9px;
    & img {
      width: 100% !important;
      margin: none;
      background-color: white;
    }
  }
`;
const MoreOptionsButton = styled.div`
  border: none;
  background-color: none;
  height: 24px;
  width: 24px;
`;
const NextButton = styled.div`
  width: 146px;
  margin: auto;
  height: 56px;
  margin-top: 50px;

  background: #25ce7b;
  box-shadow: 0px 4px 90px #000000;
  border-radius: 4px;
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height, or 131% */

  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: -0.32px;

  color: #ffffff;
  /* margin-bottom: 34px; */
  & p {
    margin-top: 10px;
  }
`;
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
  const FlyingDiv = styled.div`
    display: grid;
    grid-template-rows: 65% 15% 15%;
    grid-gap: 3%;
    align-items: end;
    justify-content: center;
    text-align: center;

    /* background-color: #6e5e5e; */
    & > :nth-child(1) {
      height: ${() => {
        return `${props.footprintData.flying}%`;
      }};
      margin: auto;
      margin-bottom: 0px;
      background-color: #3c89ff;
      width: 9px;
      border-radius: 10px;
    }
    & > :nth-child(2) {
      font-family: "Segoe UI", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 21px;
      /* identical to box height, or 150% */

      letter-spacing: -0.32px;

      color: #ffffff;
    }
    & > :nth-child(3) {
      font-family: "Segoe UI", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 21px;
      /* identical to box height, or 175% */

      letter-spacing: -0.32px;

      color: #ffffff;
    }
  `;
  const SpendingDiv = styled.div`
    display: grid;
    grid-template-rows: 65% 15% 15%;
    grid-gap: 3%;
    align-items: end;
    justify-content: center;
    text-align: center;

    /* background-color: #6e5e5e; */
    & > :nth-child(1) {
      height: ${() => {
        return `${props.footprintData.spending}%`;
      }};
      margin: auto;
      margin-bottom: 0px;
      background-color: #3c89ff;
      width: 9px;
      border-radius: 10px;
    }
    & > :nth-child(2) {
      font-family: "Segoe UI", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 21px;
      /* identical to box height, or 150% */

      letter-spacing: -0.32px;

      color: #ffffff;
    }
    & > :nth-child(3) {
      font-family: "Segoe UI", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 21px;
      /* identical to box height, or 175% */

      letter-spacing: -0.32px;

      color: #ffffff;
    }
  `;
  const HousingDiv = styled.div`
    display: grid;
    grid-template-rows: 65% 15% 15%;
    grid-gap: 3%;
    align-items: end;
    justify-content: center;
    text-align: center;

    /* background-color: #6e5e5e; */
    & > :nth-child(1) {
      height: ${() => {
        return `${props.footprintData.housing}%`;
      }};
      margin: auto;
      margin-bottom: 0px;
      background-color: #3c89ff;
      width: 9px;
      border-radius: 10px;
    }
    & > :nth-child(2) {
      font-family: "Segoe UI", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 21px;
      /* identical to box height, or 150% */

      letter-spacing: -0.32px;

      color: #ffffff;
    }
    & > :nth-child(3) {
      font-family: "Segoe UI", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 21px;
      /* identical to box height, or 175% */

      letter-spacing: -0.32px;

      color: #ffffff;
    }
  `;
  const DietDiv = styled.div`
    display: grid;
    grid-template-rows: 65% 15% 15%;
    grid-gap: 3%;
    align-items: end;
    justify-content: center;
    text-align: center;

    /* background-color: #6e5e5e; */
    & > :nth-child(1) {
      height: ${() => {
        return `${props.footprintData.diet}%`;
      }};
      margin: auto;
      margin-bottom: 0px;
      background-color: #3c89ff;
      width: 9px;
      border-radius: 10px;
    }
    & > :nth-child(2) {
      font-family: "Segoe UI", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 21px;
      /* identical to box height, or 150% */

      letter-spacing: -0.32px;

      color: #ffffff;
    }
    & > :nth-child(3) {
      font-family: "Segoe UI", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 21px;
      /* identical to box height, or 175% */

      letter-spacing: -0.32px;

      color: #ffffff;
    }
  `;
  const MobilityDiv = styled.div`
    display: grid;
    grid-template-rows: 65% 15% 15%;
    grid-gap: 3%;
    align-items: end;
    justify-content: center;
    text-align: center;

    /* background-color: #6e5e5e; */
    & > :nth-child(1) {
      height: ${() => {
        return `${props.footprintData.mobility}%`;
      }};
      margin: auto;
      margin-bottom: 0px;
      background-color: #3c89ff;
      width: 9px;
      border-radius: 10px;
    }
    & > :nth-child(2) {
      font-family: "Segoe UI", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 21px;
      /* identical to box height, or 150% */

      letter-spacing: -0.32px;

      color: #ffffff;
    }
    & > :nth-child(3) {
      font-family: "Segoe UI", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 21px;
      /* identical to box height, or 175% */

      letter-spacing: -0.32px;

      color: #ffffff;
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
        <HeadingUnderstand>Understand your footprint</HeadingUnderstand>
        <VerticalBarsDiv>
          <FlyingDiv>
            <div></div>
            <div>Flying</div>
            <div>{props.footprintData.flying}%</div>
          </FlyingDiv>
          <SpendingDiv>
            {" "}
            <div></div>
            <div>Spending</div>
            <div>{props.footprintData.spending}%</div>
          </SpendingDiv>
          <HousingDiv>
            {" "}
            <div></div>
            <div>Housing</div>
            <div>{props.footprintData.housing}%</div>
          </HousingDiv>
          <DietDiv>
            {" "}
            <div></div>
            <div>Diet</div>
            <div>{props.footprintData.diet}%</div>
          </DietDiv>
          <MobilityDiv>
            {" "}
            <div></div>
            <div>Mobility </div>
            <div>{props.footprintData.mobility}%</div>
          </MobilityDiv>
        </VerticalBarsDiv>

        <HeadingMoreOptions>More options</HeadingMoreOptions>
        <MoreOptionsWrapper>
          <div>
            Missed something? Want to share more details about your footprint?
          </div>
          <MoreOptionsButton>
            <div>
              <img src={svg} alt="" />{" "}
            </div>
          </MoreOptionsButton>
        </MoreOptionsWrapper>
        <MoreOptionsWrapper>
          <div>Reset all questions and restart the calculator</div>
          <MoreOptionsButton>
            <div>
              <img src={svg} alt="" />{" "}
            </div>
          </MoreOptionsButton>
        </MoreOptionsWrapper>
        <NextButton
          onClick={() => {
            props.handelPage();
          }}
        >
          <p>Next </p>
        </NextButton>
      </SecondWrapperDiv>
    </MainWrapperDiv>
  );
};
