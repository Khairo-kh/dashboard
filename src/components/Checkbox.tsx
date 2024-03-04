import React from "react";
import styled from "styled-components";

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const CheckboxContainer = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  width: 2rem;
  height: 2rem;
  border: 2px solid ${({ checked }) => (checked ? "#007bff" : "#aaa")};
  border-radius: 5px;
  transition: all 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border-color: #007bff;
  }
`;

const CheckIcon = styled.svg<{ checked: boolean }>`
  width: 1.3rem;
  height: 1.3rem;
  fill: transparent;
  stroke: ${({ checked }) => (checked ? "#007bff" : "transparent")};
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  visibility: ${({ checked }) => (checked ? "visible" : "hidden")};
`;

const Checkbox: React.FC<CheckboxProps> = ({ checked = false, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} onChange={handleChange} />
      <StyledCheckbox checked={checked}>
        <CheckIcon viewBox="0 0 24 24" checked={checked}>
          <polyline points="20 6 9 17 4 12" />
        </CheckIcon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
};

export default Checkbox;
