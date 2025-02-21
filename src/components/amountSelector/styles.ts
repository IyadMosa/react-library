// styles.ts
import styled, { css } from "styled-components";

interface ContainerProps {
  $fullWidth?: boolean;
  $disabled?: boolean;
}

interface ButtonProps {
  $disabled?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: fit-content;
  border: 1px solid #ccc; // Add border to the container
  padding: 16px; // Add padding around the elements
  border-radius: 8px; // Add rounded corners (optional)
  box-sizing: border-box; // Ensure padding is included in width

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
    `}
`;

export const Label = styled.label`
  font-size: 1rem;
  color: #333;
  margin-bottom: 4px;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
  box-sizing: border-box;

  &:disabled {
    background-color: #eee;
    cursor: not-allowed;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
`;

export const Button = styled.button<ButtonProps>`
  padding: 6px 12px;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
