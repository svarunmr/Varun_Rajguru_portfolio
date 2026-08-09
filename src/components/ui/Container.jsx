import { createElement } from "react";

export default function Container({ as: Element = "div", className = "", children }) {
  return createElement(
    Element,
    { className: `container ${className}`.trim() },
    children
  );
}
