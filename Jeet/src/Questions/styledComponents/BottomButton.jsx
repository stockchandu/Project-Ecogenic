import { useState } from "react/cjs/react.development";
import styled from "styled-components";

const Button = styled.button`
  padding: 6px 6px 6px 8px;
  width: 382px;
  height: 48px;
  border: none;
  background-color: #149f65;
  border-radius: 4px;
  margin-bottom: 56px;
  /* text........ */
  font-family: "Rubik", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  /* margin-top: -10px; */
  color: #ffffff;
`;

export function BottomButton(props) {
  //console.log(props.isSelected);

  // const [sel, setSel] = useState(false);
  // props.isSelected && setSel(true);
  return <Button onClick={props.onclick}> {props.children}</Button>;
}
