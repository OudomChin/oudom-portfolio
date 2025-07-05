import React from "react";

export const Button = ({ onClick, children, ariaLabel, disabled = false }) => {
  return (
    <button
      type="button"
      className="w-full px-4 py-2 bg-asset text-primary rounded-full"
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
