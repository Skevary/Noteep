import * as React from "react";

const SvgBar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M2 5v2h20V5H2zm0 6v2h20v-2H2zm0 6v2h20v-2H2z" />
  </svg>
);

export default SvgBar;
