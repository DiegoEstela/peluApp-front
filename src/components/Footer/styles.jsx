import styled from "styled-components";

export const FooterComponent = styled.footer`
  background-color: #e5e5f7;
  opacity: 0.4;
  background-image: repeating-radial-gradient(
      circle at 0 0,
      transparent 0,
      #e5e5f7 8px
    ),
    repeating-linear-gradient(#5c6b7355, #5c6b73);
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10vh;
  @media (max-width: 768px) {
    height: 12vh;
    min-height: 70px;
    margin: 0;
    padding: 0;
  }
  @media (max-height: 500px) {
    display: none;
  }

  span {
    display: flex;
    flex-direction: row;
    :hover {
      cursor: pointer;
    }
  }
`;
