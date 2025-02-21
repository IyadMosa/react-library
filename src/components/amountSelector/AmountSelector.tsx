// AmountSelector.tsx
import React from "react";
import * as S from "./styles";

interface AmountSelectorProps {
  label?: string;
  amount: number;
  onChange: (amount: number) => void;
  fullWidth?: boolean;
  disabled?: boolean;
}

const predefinedAmounts = [50, 100, 200, 500, 1000];

const AmountSelector: React.FC<AmountSelectorProps> = ({
  label = "Amount",
  amount,
  onChange,
  fullWidth = false,
  disabled = false,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value) || 0;
    onChange(value);
  };

  const handlePredefinedAmountClick = (value: number) => {
    onChange(amount + value);
  };

  return (
    <S.Container $fullWidth={fullWidth} $disabled={disabled}>
      <S.Label htmlFor="amount-input">{label}</S.Label>{" "}
      <S.Input
        type="number"
        id="amount-input"
        value={amount}
        onChange={handleInputChange}
        placeholder="Enter amount"
        disabled={disabled}
        required
      />
      {/* Conditionally render buttons */}
      {!disabled && (
        <S.ButtonGroup>
          {predefinedAmounts.map((value) => (
            <S.Button
              key={value}
              onClick={() => handlePredefinedAmountClick(value)}
              disabled={disabled}
            >
              +{value}
            </S.Button>
          ))}
        </S.ButtonGroup>
      )}
    </S.Container>
  );
};

export default AmountSelector;
