import styled from "styled-components";
import Button from "../button/button.component";

export const StyledCartDropdown = styled.div`
  position: absolute;
  width: 360px;
  height: 480px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 120px;
  right: 80px;
  z-index: 5;
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 360px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
  white-space: nowrap;
`;

export const StyledButton = styled(Button)`
  margin-top: auto;
`;
