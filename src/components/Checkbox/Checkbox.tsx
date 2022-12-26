import React, { FC } from 'react';

import { StyledCheckbox, StyledCheckboxWrapper } from './Checkbox.style';

interface CheckboxProps {
  /** Disable the button */
  disabled?: boolean;
  checked?: boolean;
  id?: string; // Pass id so a label with for can be used
  className?: string;
  marginBetweenChildrenAndCheckbox?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Calls a method with the new value after change */
  onChangeValue?: (checked: boolean) => void;
  debugId?: string;
  children?: any;
}

const Checkbox: FC<CheckboxProps> = ({
  disabled = false,
  checked = false,
  id,
  className,
  onChange,
  onChangeValue,
  debugId,
  marginBetweenChildrenAndCheckbox = '7px',
  children,
}) => {
  const handleOnChange = e => {
    if (onChange) {
      onChange(e);
    }
    if (onChangeValue) {
      onChangeValue(e.target?.checked);
    }
  };
  return (
    <StyledCheckboxWrapper disabled={disabled} className={className}>
      <label data-debug-id={debugId}>
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={handleOnChange}
          disabled={disabled}
        />
        <StyledCheckbox
          disabled={disabled}
          checked={checked}
          marginRight={!!children ? marginBetweenChildrenAndCheckbox : ''}
        >
          <svg
            width="14"
            height="14"
            viewBox="-1 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.5" width="14" height="14" rx="2.15385" />
            <path
              d="M4 7.125L6.625 9.75L11 4.5"
              strokeWidth="0.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </StyledCheckbox>
        {children}
      </label>
    </StyledCheckboxWrapper>
  );
};

export default Checkbox;
