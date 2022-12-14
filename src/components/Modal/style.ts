import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  box-shadow: 1px 1px 10px rgba(85, 85, 85, 0.15);
  background: #ffffff;
  border-radius: 5px;
  height: 100%;
  width: 100%;
  top: 10%;
  left: 30%;
  max-width: 800px;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  z-index: 99;
`;

export const TitleWrapper = styled.div`
  font-family: "Titillium Web";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: #3c4144;
`;

export const XWrapper = styled.div`
  font-family: "Titillium Web";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  align-items: center;
  text-transform: capitalize;
  color: #3c4144;
  display: flex;
  justify-content: flex-end;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  padding: 20px;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  justify-content: left;
  min-height: 75%;
  border: 1px solid whitesmoke;
  overflow: overlay;
  padding-left: 40px;
  padding-top: 20px;
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 60px;
  padding: 5px;
  gap: 15px;
`;
