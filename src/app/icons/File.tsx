import * as React from "react";

const SvgFile = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M6 2c-1.094 0-2 .906-2 2v16c0 1.094.906 2 2 2h12c1.094 0 2-.906 2-2V8l-6-6H6zm0 2h7v5h5v11H6V4zm7.5 9.334L11 16.668l-1.5-2L7 18h10l-3.5-4.666z" />
  </svg>
);

export default SvgFile;
