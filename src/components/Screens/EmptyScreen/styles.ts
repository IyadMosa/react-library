import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 50px;
  background: white;
  height: 100%;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20px;
  width: 100%;
  height: 100%;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  height: 30px;
  font-family: "Titillium Web";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: black;
  border-bottom: solid 1px black;
`;
