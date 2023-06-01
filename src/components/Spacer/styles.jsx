import styled from "styled-components";

export const SpacerComponent = styled.div`
  display: block;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  @media (max-height: 500px) {
    width: 0;
    height: 10px;
  }
`;
