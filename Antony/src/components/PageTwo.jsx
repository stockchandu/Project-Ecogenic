import { BottomButton } from "./styledComponents/BottomButton";
import { Skip } from "./styledComponents/Skipbutton";
import styled from "styled-components";
import { useState } from "react";

const Maindiv = styled.div`
  width: 100%;
`;

export const PageTwo = (props) => {
  const [bottomButtonText, setBottomButtonText] = useState("NEXT");
  const [isSelected, setIsSelected] = useState(false);

  const ButtonWrapDiv = styled.div`
    margin-top: 107px;
    display: flex;
    justify-content: center;
    & button {
      color: ${isSelected ? "white" : " #149f65"};
      background-color: ${isSelected ? " #149f65" : "white"};
      border: ${isSelected ? "none" : "solid #CED4DA 1px"};
    }
  `;

  return (
    <Maindiv>
      <Skip onclick={props.handelSkip} />
      {/* <Para>
        Let’s find informative blogs to <br /> follow based on your interests.
      </Para>
 */}
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
