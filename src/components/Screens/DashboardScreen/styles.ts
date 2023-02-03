import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  background: white;
  padding-right: 20px;
  width: 100%;
  height: 100%;
`;
export const ChartRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  width: 100%;
  min-height: 200px;
  //border: black 5px solid;
`;
export const ChartColumn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  width: 100%;
  min-height: 200px;
  //border: black 5px solid;
`;
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .select {
    min-width: 85%;
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  height: 14px;
  font-family: "Titillium Web";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: black;
`;
