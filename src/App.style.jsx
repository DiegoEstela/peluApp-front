import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  text-align: center;
  height: 79vh;
  max-height: 79vh;
`;

export const Card = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    margin: 5%;
    height: 70vh;
    max-height: 70vh;
    border-radius: 10px;
    box-shadow: 0 5px 10px -3px rgb(0 0 0 / 80%);
  }
`;

export const FullContainer = styled.div`
  margin: 0;
  padding: 0;
  height: 100%; 
  width: 100%;
  overflow: hidden
  font-family: "Work Sans", sans-serif;
  input {
    color: red;
  }
`;
