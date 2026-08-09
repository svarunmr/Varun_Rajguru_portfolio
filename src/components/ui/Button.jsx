import { forwardRef } from "react";

const Button = forwardRef(function Button(
  {
    variant = "primary",
    className = "",
    type = "button",
    href,
    children,
    ...props
  },
  ref
) {
  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        className={`button button--${variant} ${className}`.trim()}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type={type}
      className={`button button--${variant} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
