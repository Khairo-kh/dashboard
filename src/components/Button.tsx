import React from "react";
import styled from "styled-components";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  type?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  onClick?: () => void;
}

const sizes = {
  small: {
    fontSize: "12px",
    padding: "8px 16px",
  },
  medium: {
    fontSize: "14px",
    padding: "10px 20px",
  },
  large: {
    fontSize: "16px",
    padding: "12px 24px",
  },
};

const colors = {
  primary: {
    background: "#007bff",
    color: "#fff",
  },
  secondary: {
    background: "#6c757d",
    color: "#fff",
  },
  danger: {
    background: "#dc3545",
    color: "#fff",
  },
};

const Button = styled.button<ButtonProps>`
  font-family: "Arial", sans-serif;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  ${({ size }) => sizes[size || "medium"]}
  ${({ type: func }) => colors[func || "primary"]}

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const CustomButton: React.FC<ButtonProps> = ({
  children,
  size = "medium",
  type: func = "primary",
  ...props
}) => {
  return (
    <Button size={size} type={func} {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;
