import { BottomButton } from "./styledComponents/BottomButton";
import { Skip } from "./styledComponents/Skipbutton";
import styled from "styled-components";

const Maindiv = styled.div`
  width: 100%;
`;
const ButtonWrapDiv = styled.div`
  margin-top: 107px;
  display: flex;
  justify-content: center;
`;
export const PageTwo = (props) => {
  return (
    <Maindiv>
      <Skip onclick={props.handelSkip} />
      {/* <Para>
        Let’s find informative blogs to <br /> follow based on your interests.
      </Para>

      <ImgWrapDiv>
        <ImagesDiv>
          {" "}
          <img src={im1} alt="" />
          <img src={im2} alt="" />
          <img src={im3} alt="" />
        </ImagesDiv>
        <ImagesDiv>
          {" "}
          <img src={im4} alt="" />
          <img src={im5} alt="" />
          <img src={im6} alt="" />
        </ImagesDiv>
        <ImagesDiv>
          {" "}
          <img src={im7} alt="" />
          <img src={im8} alt="" />
          <img src={im9} alt="" />
        </ImagesDiv>
      </ImgWrapDiv> */}
      <ButtonWrapDiv>
        {" "}
        <BottomButton onclick={props.handelPage}> continue</BottomButton>
      </ButtonWrapDiv>
    </Maindiv>
  );
};
