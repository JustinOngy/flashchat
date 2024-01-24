// Input.jsx
import React, { useState } from "react";
import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BsEye, BsEyeSlash } from "react-icons/bs"; // Ensure these are imported

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
  showPasswordToggle?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type = "text",
  required,
  register,
  errors,
  disabled,
  showPasswordToggle = false,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  const inputType = showPasswordToggle
    ? passwordVisible
      ? "text"
      : "password"
    : type;

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2 relative">
        <input
          id={id}
          type={inputType}
          autoComplete={id}
          {...register(id, { required })}
          disabled={disabled}
          className={clsx(
            "form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6",
            errors[id] && "focus:ring-rose-500",
            disabled && "opacity-50 cursor-not-allowed",
            showPasswordToggle && "pr-10"
          )}
        />
        {showPasswordToggle && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <button
              type="button"
              onClick={togglePasswordVisibility}
              aria-label={passwordVisible ? "Hide password" : "Show password"}
              className="text-gray-500 hover:text-gray-700 focus:outline-none">
              {passwordVisible ? <BsEyeSlash /> : <BsEye />}
            </button>
          </div>
        )}
      </div>
      {/* {errors[id] && (
        <p className="mt-2 text-sm text-red-600" id={`${id}-error`}>
          {errors[id].message}
        </p>
      )} */}
    </div>
  );
};

export default Input;
