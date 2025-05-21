// Button.jsx
import styled from "styled-components";

const sizes = {
  sm: {
    padding: "var(--spacing-sm) var(--spacing-md)",
    fontSize: "var(--font-size-sm)",
  },
  md: {
    padding: "var(--spacing-md) var(--spacing-lg)",
    fontSize: "var(--font-size-md)",
  },
  lg: {
    padding: "var(--spacing-lg) var(--spacing-lg)",
    fontSize: "var(--font-size-lg)",
  },
};

const variants = {
  primary: {
    background: "var(--color-primary)",
    color: "var(--color-white)",
  },
  secondary: {
    background: "var(--color-secondary)",
    color: "var(--color-white)",
  },
};

const StyledButton = styled.button`
  font-family: var(--font-body);
  padding: ${({ size }) => sizes[size]?.padding};
  font-size: ${({ size }) => sizes[size]?.fontSize};
  background-color: ${({ variant }) => variants[variant]?.background};
  color: ${({ variant }) => variants[variant]?.color};
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  transition: background-color 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

const Button = ({ children, variant = "primary", size = "md", ...props }) => {
  return (
    <StyledButton variant={variant} size={size} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
