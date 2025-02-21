import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background-color: white;
  text-align: center;
  max-width: 400px;
  margin: auto;
  border: 1px solid #ddd;
`;

export const Title = styled.h1`
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

export const ProgressBarContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: #e5e7eb;
  border-radius: 8px;
  height: 24px;
  overflow: hidden;
`;

export const ProgressBar = styled.div<{ color: string; width: number }>`
  height: 100%;
  background-color: ${({ color }) => color};
  width: ${({ width }) => width}%;
  transition: width 0.5s ease-in-out;
  min-width: 4px;
`;

export const PercentageText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  font-weight: bold;
  color: white;
`;

export const DetailsText = styled.p`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #555;
`;
