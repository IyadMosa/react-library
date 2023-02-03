import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  height: 400px;
  padding: 5px;
  background: white;
  border: whitesmoke solid 1px;
`;

export const TitleWrapper = styled.div`
  font-family: "Titillium Web";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: #3c4144;
  padding: 10px;
  border-bottom: whitesmoke solid 1px;
`;

export const NoData = styled.div`
  font-family: "Titillium Web";
  font-style: normal;
  font-weight: 200;
  font-size: 20px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: #3c4144;
  padding: 10px;
  justify-content: center;
`;
