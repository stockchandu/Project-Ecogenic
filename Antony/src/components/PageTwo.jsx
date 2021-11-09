import { BottomButton } from "./styledComponents/BottomButton";
import { RoundButton } from "./styledComponents/RoundButton";
import { Skip } from "./styledComponents/Skipbutton";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Maindiv = styled.div`
  width: 100%;
`;

const Para = styled.p`
  font-family: "Rubik", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 25px;
  /* identical to box height, or 125% */
  margin-bottom: 130px;
  margin-top: 75px;
  text-align: center;
  letter-spacing: 0.02em;

  color: #495057;
`;

export const PageTwo = (props) => {
  const [bottomButtonText, setBottomButtonText] = useState("NEXT");
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    isSelected ? setBottomButtonText("FINISH") : setBottomButtonText("NEXT");
  }, [isSelected]);

  const ButtonWrapDiv = styled.div`
    margin-top: 90px;
    display: flex;
    justify-content: center;
    & button {
      color: ${isSelected ? "white" : " #149f65"};
      background-color: ${isSelected ? " #149f65" : "white"};
      border: ${isSelected ? "none" : "solid #CED4DA 1px"};
    }
  `;

  const RoundButtonDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: -15px;
  `;

  return (
    <Maindiv>
      <Skip onclick={props.handelSkip} />
      <Para>What are you interested in?</Para>

      <RoundButtonDiv>
        {" "}
        <RoundButton isBig={true}>Home & Lifestyle</RoundButton>
        <RoundButton isBig={true}>Food & Kitchen</RoundButton>
      </RoundButtonDiv>
      <RoundButtonDiv>
        {" "}
        <RoundButton isBig={false}>Beauty & Wellness</RoundButton>
        <RoundButton isBig={false}>Pets</RoundButton>
        <RoundButton isBig={true}>Food & Kitchen</RoundButton>
      </RoundButtonDiv>
      <RoundButtonDiv>
        {" "}
        <RoundButton isBig={true}>Fashion</RoundButton>
        <RoundButton isBig={false}>Art & Design</RoundButton>
        <RoundButton isBig={false}>Health & Fitness</RoundButton>
      </RoundButtonDiv>
      <RoundButtonDiv>
        {" "}
        <RoundButton isBig={false}>The World</RoundButton>
        <RoundButton isBig={false}>News</RoundButton>
        <RoundButton isBig={true}>DIY crafts</RoundButton>
      </RoundButtonDiv>
      <RoundButtonDiv>
        {" "}
        <RoundButton isBig={false}>Blockchain</RoundButton>
        <RoundButton isBig={false}>Programming</RoundButton>
        <RoundButton isBig={false}>Beauty & Wellness</RoundButton>
      </RoundButtonDiv>
      <RoundButtonDiv>
        {" "}
        <RoundButton isBig={false}>Home & Lifestyle</RoundButton>
        <RoundButton isBig={true}>Food & Kitchen</RoundButton>
      </RoundButtonDiv>

      <ButtonWrapDiv>
        {" "}
        <BottomButton
          yes={"yes"}
          isSelected={isSelected}
          onclick={props.handelPage}
        >
          {" "}
          {bottomButtonText}
        </BottomButton>
      </ButtonWrapDiv>
    </Maindiv>
  );
};
