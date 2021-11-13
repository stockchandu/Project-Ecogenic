import styled from "styled-components";
import { topicFirstImage,
  topicSecondImage,
  topicThirdImage,
  topicFourImage,
  topicFiveImage,
  topicSixImage,
  topicSevenImage, 
  topicEightImage,
  topicNineImage } from "../images/allImages";

import { BottomButton } from "./styledComponents/BottomButton";
import { Skip } from "./styledComponents/Skipbutton";

const Para = styled.p`
  margin-top: 63px;
  text-align: center;
  font-family: "Rubik", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #495057;
`;

const ImgWrapDiv = styled.div`
  margin-top: 44px;
`;
const ButtonWrapDiv = styled.div`
  margin-top: 107px;
  display: flex;
  justify-content: center;
`;

const ImagesDiv = styled.div`
  display: flex;
  margin-top: 2.5%;
  grid-gap: 2.5%;
`;
const Maindiv = styled.div`
  width: 100%;
`;
export const TopicInterestPage1 = (props) => {
  return (
    <Maindiv>
      <Skip onclick={props.handelSkip} />
      <Para>
        Let’s find informative blogs to <br /> follow based on your interests.
      </Para>

      <ImgWrapDiv>
        <ImagesDiv>
          {" "}
          <img src={topicFirstImage} alt="" />
          <img src={topicSecondImage} alt="" />
          <img src={topicThirdImage} alt="" />
        </ImagesDiv>
        <ImagesDiv>
          {" "}
          <img src={topicFourImage} alt="" />
          <img src={topicFiveImage} alt="" />
          <img src={topicSixImage} alt="" />
        </ImagesDiv>
        <ImagesDiv>
          {" "}
          <img src={topicSevenImage} alt="" />
          <img src={ topicEightImage} alt="" />
          <img src={topicNineImage} alt="" />
        </ImagesDiv>
      </ImgWrapDiv>
      <ButtonWrapDiv>
        {" "}
        <BottomButton onclick={props.handelPage}> continue</BottomButton>
      </ButtonWrapDiv>
    </Maindiv>
  );
};
