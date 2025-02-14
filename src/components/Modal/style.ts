import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  z-index: 1000;
  animation: fadeIn 0.2s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;
  background: #f7f7f7;
`;

export const TitleWrapper = styled.h2`
  font-family: "Titillium Web", sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #333;
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 22px;
  font-weight: bold;
  color: #666;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transition: background 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const ContentsWrapper = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  max-height: 60vh;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 12px 16px;
  gap: 10px;
  background: #f7f7f7;
  border-top: 1px solid #e0e0e0;

  button {
    padding: 8px 16px;
    font-size: 14px;
    border-radius: 6px;
    transition: all 0.2s ease-in-out;

    &.btn-success {
      background: #28a745;
      color: #fff;
      border: none;

      &:hover {
        background: #218838;
      }

      &:disabled {
        background: #a5d6a7;
        cursor: not-allowed;
      }
    }

    &.btn-primary {
      background: #007bff;
      color: #fff;
      border: none;

      &:hover {
        background: #0056b3;
      }
    }
  }
`;
