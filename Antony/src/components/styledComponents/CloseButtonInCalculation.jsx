import styled from "styled-components";

const Button = styled.button`
  font-size: 25px;
  font-weight: 600;
  color: white;

  margin-left: 5px;
  margin-top: 60px;
  background-color: none;
  background: none;
  border: none;
`;

export function CloseButton() {
  return <Button>✕</Button>;
}
