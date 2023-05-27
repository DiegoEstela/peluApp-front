import styled from "styled-components";

export const NavContainer = styled.nav`
  @media (max-width: 768px) {
    .links {
      display: none;
      top: -700px;
      left: -2000px;
      right: 0;
    }
    .links.active {
      width: 100%;
      display: block;
      margin-left: auto;
      margin-right: auto;
      top: 13%;
      text-align: center;
      transition: all 0.5s ease;

      a {
        color: #e0fbfc;
        font-size: 1.5rem;
        display: block;
      }
    }
  }
`;

export const BgDiv = styled.div`
  @media (max-width: 768px) {
    background-color: #9db4c0;
    position: absolute;
    top: -1000px;
    left: -1000px;
    width: 100%;
    z-index: -1;
    transition: all 0.6s ease;
    a {
    }
    &.active {
      border-radius: 0 0 80% 0;
      top: 0;
      left: 0;
      height: 40vh;
    }
  }
`;
