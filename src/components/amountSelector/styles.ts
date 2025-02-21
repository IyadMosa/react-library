import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background-color: white;
  max-width: 400px;
  min-width: 200px;
  margin: auto;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-right: 10px;
  white-space: nowrap;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid #ccc;
  text-align: center;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 10px 15px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 6px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;
