import React from "react";
import "./button.css";

export function Button({ text, width, className = "", ...props }) {
  const btnWidth = typeof width === "number" ? `${width}px` : width;

  return (
    <button
      className={`button-1 ${className}`}
      style={btnWidth ? { ["--btn-w"]: btnWidth } : undefined}
      {...props}
    >
      <span className="button-inner ">{text}</span>
    </button>
  );
}
