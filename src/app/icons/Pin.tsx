import * as React from "react";

const SvgPin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M14.707 2.293l-1.414 1.414 1.096 1.096-6.2 4.972-1.482-1.482-1.414 1.414 3.8 3.8L3 19.6V21h1.4l6.092-6.094 3.801 3.801 1.414-1.414-1.396-1.397 4.904-6.267 1.078 1.078 1.414-1.414-7-7zm1.092 3.943l1.98 1.98-4.802 6.143-3.252-3.252 6.074-4.87z" />
  </svg>
);

export default SvgPin;
