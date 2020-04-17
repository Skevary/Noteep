import * as React from "react";

const SvgLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path fill="#039be5" d="M6 14L24 4v10l-9 5z" />
    <path
      fill="#0277bd"
      d="M24 34l8.737-4.9v-.001L42 24v10L24 44zm0-20V4l18 10-9 5z"
    />
    <path fill="#039be5" d="M6 33l9-4 9 5v10z" />
    <path fill="#0277bd" d="M6 14l9 5v10l-9 4z" />
    <path fill="#bdbdbd" d="M24 24V14l9 5v10z" />
    <path fill="#003469" d="M32.718 29.111l.001-.001v.001z" />
    <path fill="#757575" d="M15 19l9-5v10l-9 5z" />
  </svg>
);

export default SvgLogo;
