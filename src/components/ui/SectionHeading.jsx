import { createElement } from "react";

export default function SectionHeading({
  eyebrow,
  number,
  title,
  description,
  as: Heading = "h2",
  id,
  className = "",
}) {
  return (
    <div className={`section-heading ${className}`.trim()}>
      {(eyebrow || number) && (
        <p className="section-heading__eyebrow">
          {number && <span>{number} </span>}
          {eyebrow}
        </p>
      )}
      {createElement(Heading, { className: "type-heading-lg", id }, title)}
      {description && <p className="type-body">{description}</p>}
    </div>
  );
}
