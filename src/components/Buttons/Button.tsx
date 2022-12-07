import React from "react";

type Props = {
  type?: "primary" | "secondary";
  variant?: "outline" | "outline-circle" | "standard" | "standard-circle";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: Props) => {
  return <button {...props}>{props.children}</button>;
};

export default Button;
