import * as React from "react";

const SvgCode = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M5 3a2 2 0 00-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5a2 2 0 00-2-2H5zm0 2h14v2H5V5zm0 4h14v10H5V9zm5 1.793L6.793 14 10 17.207l1-1L8.793 14 11 11.793l-1-1zm4 0l-1 1L15.207 14 13 16.207l1 1L17.207 14 14 10.793z" />
  </svg>
);

export default SvgCode;
