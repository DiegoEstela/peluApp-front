import styled from "styled-components";

export const ButtonContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const ButtonComponent = styled.a`
  font-size: 20px;
  width: 160px;
  padding: 16px;
  display: flex;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  background: ${(props) => props.color};
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property; box-shadow, transform;
  transition-property: box-shadow, transform;
  :hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    -webkit-trasnform: scale(1.1);
    transform: scale(1.1);
  }
`;
