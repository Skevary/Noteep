import * as React from "react";

const SvgUnderline = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M6 2v10c0 3.302 2.698 6 6 6s6-2.698 6-6V2h-2v10c0 2.22-1.78 4-4 4-2.22 0-4-1.78-4-4V2H6zm0 18v2h12v-2H6z" />
  </svg>
);

export default SvgUnderline;
