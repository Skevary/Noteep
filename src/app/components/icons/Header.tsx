import * as React from "react";

const SvgHeader = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M5 3v18h3v-8h8v8h3V3h-3v7H8V3H5z" />
  </svg>
);

export default SvgHeader;
