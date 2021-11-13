import react from "react";
import styled from "styled-components";

export function RoundButton(props) {
  const Button = styled.button`
    /* padding: 6px; */
    height: 34px;
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
    border: ${props.state ? "none" : "solid ##6c757d 1px"};
  `;

  const CrossDiv = styled.div`
    font-size: 20px;
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: ${props.isBig ? "0px" : "2px"};
    margin-left: 1px;
  `;

  return (
    <Button
      onClick={() => {
        props.handleIsSelected(props.name);
      }}
    >
      {" "}
      {props.children}
      <CrossDiv
        onClick={() => {
          setTimeout(() => {
            props.handleRemoveIsSelected(props.name);
          }, 10);
        }}
      >
        {" "}
        {props.state && "✕"}{" "}
      </CrossDiv>
    </Button>
  );
}
