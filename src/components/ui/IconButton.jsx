import { forwardRef } from "react";

const IconButton = forwardRef(function IconButton(
  { label, className = "", type = "button", children, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      type={type}
      aria-label={label}
      className={`icon-button ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
});

export default IconButton;
