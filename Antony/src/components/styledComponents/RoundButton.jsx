import { useState, useEffect, useRef } from "react/cjs/react.development";
import react from "react";
import styled from "styled-components";

export function RoundButton(props) {
  // console.log(props.isSelected);
  console.log("props boolean guy consoleeeeeeeeeeee", props.state, props.name);
  // const [sel, setSel] = useState(false);
  // props.isSelected && setSel(true);

  const [selected, setSelected] = useState(false);
  // const ref = useRef(false);
  // console.log("ref at atart after initializing", ref.current);

  const Button = styled.button`
    /* padding: 6px; */
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #6c757d;
    /* background-color: #ffffff; */
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

    /* color: #212121; */
    color: ${props.state ? "white" : " #212121"};
    background-color: ${props.state ? " #149f65" : "#ffffff"};
    border: ${selected ? "none" : "solid ##6c757d 1px"};
  `;

  //   useEffect(() => {
  //     //setSelected(ref.current);
  //    // console.log("effect called...............", ref.current);
  //   }, []);
  return (
    <Button
      onClick={() => {
        props.handleIsSelected(props.name);
        // setSelected(true);
        // console.log(props.children);
        // ref.current = true;
        //console.log(ref.current, "ref current...........");
        //   setSelected(ref.current);
      }}
    >
      {" "}
      {props.children}
    </Button>
  );
}
