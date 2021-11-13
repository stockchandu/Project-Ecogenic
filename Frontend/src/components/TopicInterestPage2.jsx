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
  margin-bottom: 110px;
  margin-top: 75px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #495057;
`;

export const TopicInterestPage2 = (props) => {
  const [bottomButtonText, setBottomButtonText] = useState("NEXT");
  const [isSelected, setIsSelected] = useState(false);
  const [stateArray, setStateArray] = useState({
    Home: false,
    "Food & Kitchen": false,
    "Beauty & Wellness": false,
    Pets: false,
    "Food & Kitchen2": false,
    Fashion: false,
    "Art & Design": false,
    "Health & Fitness": false,
    "The World": false,
    News: false,
    "DIY crafts": false,
    Blockchain: false,
    Programming: false,
    "Beauty & Wellness2": false,
    "Home & Lifestyle2": false,
    "Food & Kitchen3": false,
  });
  useEffect(() => {
    isSelected ? setBottomButtonText("FINISH") : setBottomButtonText("NEXT");
  }, [isSelected]);

  const ButtonWrapDiv = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    & button {
      color: ${isSelected ? "white" : " #149f65"};
      background-color: ${isSelected ? " #149f65" : "white"};
      border: ${isSelected ? "none" : "solid #CED4DA 1px"};
    }
  `;

  const handleIsSelected = (guy) => {
    //console.log(guy);
    setStateArray({
      ...stateArray,
      [guy]: true,
    });

    setIsSelected(true);
    //console.log("setting true............", stateArray);
  };
  const handleRemoveIsSelected = (guy) => {
    var obj = stateArray;
    obj[guy] = false;
    setStateArray(obj);
  };

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
        <RoundButton
          name="Home"
          state={stateArray.Home}
          setIsSelected={setIsSelected}
          handleIsSelected={handleIsSelected}
          handleRemoveIsSelected={handleRemoveIsSelected}
          isBig={true}
        >
          Home & Lifestyle
        </RoundButton>
        <RoundButton
          name="Food & Kitchen"
          state={stateArray["Food & Kitchen"]}
          handleIsSelected={handleIsSelected}
          handleRemoveIsSelected={handleRemoveIsSelected}
          isBig={true}
        >
          Food & Kitchen
        </RoundButton>
      </RoundButtonDiv>
      <RoundButtonDiv>
        {" "}
        <RoundButton
          name="Beauty & Wellness"
          state={stateArray["Beauty & Wellness"]}
          handleIsSelected={handleIsSelected}
          handleRemoveIsSelected={handleRemoveIsSelected}
          isBig={false}
        >
          Beauty & Wellness
        </RoundButton>
        <RoundButton
          name="Pets"
          state={stateArray.Pets}
          handleIsSelected={handleIsSelected}
          handleRemoveIsSelected={handleRemoveIsSelected}
          isBig={false}
        >
          Pets
        </RoundButton>
        <RoundButton
          name="Food & Kitchen2"
          state={stateArray["Food & Kitchen2"]}
          handleIsSelected={handleIsSelected}
          handleRemoveIsSelected={handleRemoveIsSelected}
          isBig={true}
        >
          Food & Kitchen
        </RoundButton>
      </RoundButtonDiv>
      <RoundButtonDiv>
        {" "}
        <RoundButton
          name="Fashion"
          state={stateArray.Fashion}
          handleIsSelected={handleIsSelected}
          handleRemoveIsSelected={handleRemoveIsSelected}
          isBig={true}
        >
          Fashion
        </RoundButton>
        <RoundButton
          name="Art & Design"
          state={stateArray["Art & Design"]}
          handleIsSelected={handleIsSelected}
          handleRemoveIsSelected={handleRemoveIsSelected}
          isBig={false}
        >
          Art & Design
        </RoundButton>
        <RoundButton
          name="Health & Fitness"
          state={stateArray["Health & Fitness"]}
          handleIsSelected={handleIsSelected}
          handleRemoveIsSelected={handleRemoveIsSelected}
          isBig={false}
        >
          Health & Fitness
        </RoundButton>
      </RoundButtonDiv>
      <RoundButtonDiv>
        {" "}
        <RoundButton
          name="The World"
          state={stateArray["The World"]}
          handleIsSelected={handleIsSelected}
          handleRemoveIsSelected={handleRemoveIsSelected}
          isBig={false}
        >
          The World
        </RoundButton>
        <RoundButton
          name="News"
          state={stateArray.News}
          handleIsSelected={handleIsSelected}
          handleRemoveIsSelected={handleRemoveIsSelected}
          isBig={false}
        >
          News
        </RoundButton>
        <RoundButton
          name="DIY crafts"
          state={stateArray["DIY crafts"]}
          handleIsSelected={handleIsSelected}
          handleRemoveIsSelected={handleRemoveIsSelected}
          isBig={true}
        >
          DIY crafts
        </RoundButton>
      </RoundButtonDiv>
      <RoundButtonDiv>
        {" "}
        <RoundButton
          name="Blockchain"
          state={stateArray.Blockchain}
          handleIsSelected={handleIsSelected}
          handleRemoveIsSelected={handleRemoveIsSelected}
          isBig={false}
        >
          Blockchain
        </RoundButton>
        <RoundButton
          name="Programming"
          state={stateArray.Programming}
          handleIsSelected={handleIsSelected}
          handleRemoveIsSelected={handleRemoveIsSelected}
          isBig={false}
        >
          Programming
        </RoundButton>
        <RoundButton
          name="Beauty & Wellness2"
          state={stateArray["Beauty & Wellness2"]}
          handleIsSelected={handleIsSelected}
          handleRemoveIsSelected={handleRemoveIsSelected}
          isBig={false}
        >
          Beauty & Wellness
        </RoundButton>
      </RoundButtonDiv>
      <RoundButtonDiv>
        {" "}
        <RoundButton
          name="Home & Lifestyle2"
          state={stateArray["Home & Lifestyle2"]}
          handleIsSelected={handleIsSelected}
          handleRemoveIsSelected={handleRemoveIsSelected}
          isBig={false}
        >
          Home & Lifestyle
        </RoundButton>
        <RoundButton
          name="Food & Kitchen3"
          state={stateArray["Food & Kitchen3"]}
          handleIsSelected={handleIsSelected}
          handleRemoveIsSelected={handleRemoveIsSelected}
          isBig={true}
        >
          Food & Kitchen
        </RoundButton>
      </RoundButtonDiv>

      <ButtonWrapDiv>
        {" "}
        <BottomButton
          yes={"yes"}
          isSelected={isSelected}
          onclick={isSelected && props.handelPage}
        >
          {" "}
          {bottomButtonText}
        </BottomButton>
      </ButtonWrapDiv>
    </Maindiv>
  );
};
