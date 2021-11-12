import styled from "styled-components";

const Clap = styled.h1`
  text-align: center;
  font-family: "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 86px;
  line-height: 114px;
  letter-spacing: -0.598261px;
  margin-top: 0px;
  color: #000000;
`;
const Para = styled.p`
  text-align: center;
  font-family: "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 46px;
  line-height: 61px;
  letter-spacing: -0.32px;
  margin-top: 0px;
  color: #212529;
`;
export function GreatChoice() {
  const WrapperDiv = styled.div`
    /* transition: 0.5s;
   
    transform: "translateY(10%)"; */

    animation: myfirst 1s;
    /* animation-direction: alternate; */
    margin-top: 370px;
    @keyframes myfirst {
      0% {
        margin-top: 770px;
      }

      100% {
      }
    }
  `;

  return (
    <>
      <WrapperDiv>
        <Clap>👏</Clap>
        <Para>Great choice</Para>
      </WrapperDiv>
    </>
  );
}
