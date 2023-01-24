import React from "react";
import "./index.scss";
type Props = {
  label: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  btnType: "button" | "reset" | "submit";
  variant: "primary" | "secondary" | "warning" | "danger";
  customClass?: string;
};

const Button = ({
  label = "Button Text",
  handleClick,
  btnType,
  variant,
  customClass,
}: Props) => {
  return (
    <>
      <button
        type={btnType}
        onClick={handleClick}
        className={`button ${variant} ${customClass}`}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
