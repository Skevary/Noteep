import * as React from "react";

const SvgStrikethrough = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M4 3v2h7v7H6v2h5v7h2v-7h5v-2h-5V5h7V3H4z" />
  </svg>
);

export default SvgStrikethrough;
