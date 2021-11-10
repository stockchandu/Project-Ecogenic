import styled from "styled-components";
import backImg from "./img/background.png";
const MainWrapperDiv = styled.div`
  background-image: url(${backImg});
  height: 1204px;
`;
console.log(backImg);
export const AnnualCarbonFootprintShow = () => {
  return <MainWrapperDiv>{/* <img src={backImg} alt="" /> */}</MainWrapperDiv>;
};
