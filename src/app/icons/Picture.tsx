import * as React from "react";

const SvgPicture = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M4 4c-1.093 0-2 .907-2 2v12c0 1.093.907 2 2 2h16c1.093 0 2-.907 2-2V6c0-1.093-.907-2-2-2H4zm0 2h16v12H4V6zm10.5 5L11 15l-2.5-2.5L5.777 16H18.25l-3.75-5z" />
  </svg>
);

export default SvgPicture;
