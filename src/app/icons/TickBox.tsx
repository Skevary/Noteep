import * as React from "react";

const SvgTickBox = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M5 3c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V9.242l-2 2L19.002 19H5V5h11.758l2-2H5zm16.293.293L11 13.586l-3.293-3.293-1.414 1.414L11 16.414 22.707 4.707l-1.414-1.414z" />
  </svg>
);

export default SvgTickBox;
