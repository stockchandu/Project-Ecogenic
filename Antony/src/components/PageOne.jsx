import styled from "styled-components";
import im1 from "./img/1.jpg";
import im2 from "./img/2.png";
import im3 from "./img/3.png";
import im4 from "./img/4.png";
import im5 from "./img/5.png";
import im6 from "./img/6.png";
import im7 from "./img/7.png";
import im8 from "./img/8.png";
import im9 from "./img/9.png";
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
export const PageOne = (props) => {
  return (
    <Maindiv>
      <Skip onclick={props.handelSkip} />
      <Para>
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
      </ImgWrapDiv>
      <ButtonWrapDiv>
        {" "}
        <BottomButton onclick={props.handelPage}> continue</BottomButton>
      </ButtonWrapDiv>
    </Maindiv>
  );
};
