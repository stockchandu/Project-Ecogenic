import styled from "styled-components";

export function CloseButton(props) {
  const Button = styled.button`
    font-size: 25px;
    font-weight: 500;
    color: ${props.color ? "black" : "white"};

    margin-left: 5px;
    margin-top: 60px;
    background-color: none;
    background: none;
    border: none;
  `;
  return <Button>✕</Button>;
}
