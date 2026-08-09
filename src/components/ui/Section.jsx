import { createElement } from "react";

export default function Section({
  as: Element = "section",
  className = "",
  children,
  ...props
}) {
  return createElement(
    Element,
    { className: `section ${className}`.trim(), ...props },
    children
  );
}
