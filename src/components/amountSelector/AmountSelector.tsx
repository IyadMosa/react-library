import React from "react";
import * as S from "./styles";

interface AmountSelectorProps {
  title: string;
  amount: number;
  onChange: (amount: number) => void;
}

const predefinedAmounts = [50, 100, 200, 500, 1000];

const AmountSelector: React.FC<AmountSelectorProps> = ({
  title = "Amount",
  amount,
  onChange,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value) || 0;
    onChange(value);
  };

  const handlePredefinedAmountClick = (value: number) => {
    onChange(amount + value);
  };

  return (
    <S.Container>
      <S.InputWrapper>
        <S.Label>{title}:</S.Label>
        <S.Input
          type="number"
          value={amount}
          onChange={handleInputChange}
          placeholder="Enter amount"
        />
      </S.InputWrapper>

      <S.ButtonGroup>
        {predefinedAmounts.map((value) => (
          <S.Button
            key={value}
            onClick={() => handlePredefinedAmountClick(value)}
          >
            +{value}
          </S.Button>
        ))}
      </S.ButtonGroup>
    </S.Container>
  );
};

export default AmountSelector;
