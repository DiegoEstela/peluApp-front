import styled from "styled-components";

export const Container = styled.header`
  height: 10vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const Row = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
  }
`;
