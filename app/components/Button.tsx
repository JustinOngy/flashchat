"use client";

import clsx from "clsx";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type,
  fullWidth,
  children,
  onClick,
  secondary,
  danger,
  disabled,
}) => {
  const buttonClass = clsx(
    "flex justify-center rounded-md px-3 py-2 text-sm font-semibold  focus:visible:outline focus:visible:outline-2 focus:visible:outline-offset-2",

    disabled && "cursor-default opacity-50",
    fullWidth && "w-full",
    secondary ? "text-gray-900" : "text-white",
    danger && "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
    !secondary &&
      !danger && [
        "bg-gradient-red-orange",
        "hover:bg-gradient-red-orange",
        "focus-visible:bg-gradient-red-orange",
      ]
  );

  return (
    <button
      style={{
        fontFamily: "Roboto Condensed",
      }}
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
