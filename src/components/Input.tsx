import React from "react";
import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputsize?: "small" | "medium" | "large";
  type?: "primary" | "secondary" | "ghost" | "filled";
  width?: "full" | "auto" | "50%" | string;
}

const sizes = {
  small: {
    fontSize: "12px",
    padding: "8px",
  },
  medium: {
    fontSize: "14px",
    padding: "10px",
  },
  large: {
    fontSize: "16px",
    padding: "12px",
  },
};

const types = {
  primary: {
    border: "1px solid #007bff",
    background: "transparent",
    color: "#007bff",
  },
  secondary: {
    border: "1px solid #6c757d",
    background: "transparent",
    color: "#6c757d",
  },
  ghost: {
    border: "none",
    background: "transparent",
    color: "#000",
  },
  filled: {
    border: "1px solid #ccc",
    background: "#f9f9f9",
    color: "#000",
  },
};

const InputField = styled.input<InputProps>`
  font-family: "Arial", sans-serif;
  border-radius: 5px;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.3s ease, background-color 0.3s ease;
  width: ${({ width }) => (width === "full" ? "100%" : width)};

  ${({ inputsize: inputsize }) => sizes[inputsize || "medium"]}
  ${({ type }) => types[type || "primary"]}

  &:hover {
    border-color: #999;
  }

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.1rem rgba(0, 123, 255, 0.25);
  }

  &::placeholder {
    color: #999;
  }
`;

const CustomInput: React.FC<InputProps> = ({
  inputsize: inputSize = "medium",
  type = "primary",
  width = "auto",
  ...props
}) => {
  return (
    <InputField inputsize={inputSize} type={type} width={width} {...props} />
  );
};

export default CustomInput;
