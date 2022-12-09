import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 500px;
  min-height: 400px;
  box-shadow: 1px 1px 10px rgba(85, 85, 85, 0.15);
  border-radius: 5px;
  padding: 5px;
  background: white;

  .ReactTable.-striped .rt-tr.-odd.selected {
    background-color: deepskyblue;
  }

  .ReactTable.-striped .rt-tr.-even.selected {
    background-color: deepskyblue;
  }

  .ReactTable {
    max-height: calc(100% - 60px);
  }

  .TableTitle {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .inner-table-div {
    box-shadow: 3px 2px 5px 0 #9999;
  }

  .table-total {
  }

  .table-total .h2 {
    font-size: large;
    margin-top: 20px;
    margin-right: 20px;
  }

  .table-total .input {
    margin-bottom: 5px;
    margin-right: 5px;
    width: fit-content;
  }
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
  padding-left: 10px;
`;

export const Title2Wrapper = styled.div`
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
  padding-top: 15px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const HeaderTitleAddWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 500px;
`;
export const HeaderButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  min-width: 50px;
`;
export const TotalWrapper = styled.div`
  min-height: 40px;
  padding: 10px;
  .input {
    width: 100%;
    border-radius: 5px;
    padding-top: 20px;
  }
`;

export const TotalInputWrapper = styled.div`
  width: 100%;
  height: 20px;
  font-family: "Titillium Web";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: black;
  border-radius: 25px;
  border: 1px solid black;
  padding: 20px;
`;
