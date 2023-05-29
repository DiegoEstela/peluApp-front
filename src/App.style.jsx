import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  text-align: center;
  height: 80vh;
  max-height: 80vh;
`;

export const Card = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    margin: 5%;
    height: 80%;
    width: 90%;
    border-radius: 10px;
    box-shadow: 0 5px 10px -3px rgb(0 0 0 / 80%);
  }
`;

export const FullContainer = styled.div`
  margin: 0;
  padding: 0;
  height: -webkit-fill-available;
  font-family: "Work Sans", sans-serif;
`;
