import styled from "styled-components";

const Button = styled.button`
  margin-left: 85%;
  margin-top: 70px;

  background-color: white;
  border: none;
  font-family: "Rubik", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 1.25px;

  /* Gray - 700 */

  color: #495057;
`;
const WrapperDiv = styled.div`
  width: 100%;
  margin: auto;
`;

export function Skip(props) {
  return (
    <WrapperDiv>
      <Button onClick={props.onclick}>SKIP</Button>
    </WrapperDiv>
  );
}
