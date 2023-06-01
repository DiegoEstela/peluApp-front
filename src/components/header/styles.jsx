import styled from "styled-components";

export const Container = styled.header`
  max-height: 10vh;
  height: 10vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  background-color: #e5e5f7;
  opacity: 0.4;
  background-image: repeating-radial-gradient(
      circle at 0 0,
      transparent 0,
      #e5e5f7 8px
    ),
    repeating-linear-gradient(#5c6b7355, #5c6b73);
  display: block;
  @media (max-width: 768px) {
    min-height: 72px;
  }
  @media (max-height: 500px) {
    display: none;
  }
`;

export const Row = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
  }
`;

export const NavPc = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
