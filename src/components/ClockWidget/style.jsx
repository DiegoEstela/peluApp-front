import styled from "styled-components";

export const ClockContainer = styled.div`
  background-color: #f5f5f5;
  padding: 8px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
`;

export const ClockDate = styled.div`
  font-size: 20px;
  color: #666666;
  text-align: center;
  margin-top: 10px;
`;

export const ClockTime = styled.div`
  font-size: 48px;
  font-weight: bold;
  color: #333333;
  text-align: center;
`;

export const ClockLabel = styled.div`
  font-size: 14px;
  color: #888888;
  margin-top: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
