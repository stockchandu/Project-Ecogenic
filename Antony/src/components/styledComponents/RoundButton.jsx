import { useState } from "react/cjs/react.development";
import styled from "styled-components";

export function RoundButton(props) {
  // console.log(props.isSelected);

  // const [sel, setSel] = useState(false);
  // props.isSelected && setSel(true);

  const Button = styled.button`
    /* padding: 6px; */
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #6c757d;
    background-color: #ffffff;
    border-radius: 14px;
    margin-bottom: 56px;
    /* text........ */
    font-family: "Rubik", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: ${props.isBig ? "16px" : "14px"};
    line-height: 16px;
    letter-spacing: 1.25px;
    /* text-transform: uppercase; */

    color: #212121;
  `;
  //   & button {
  //     color: ${isSelected ? "white" : " #149f65"};
  //     background-color: ${isSelected ? " #149f65" : "white"};
  //     border: ${isSelected ? "none" : "solid #CED4DA 1px"};
  //   }
  return <Button onClick={props.onclick}> {props.children}</Button>;
}
