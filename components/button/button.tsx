import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = (props) => {
  const { children } = props;
  return <button type="button">{children}</button>;
};
export default Button;
export type { ButtonProps };
