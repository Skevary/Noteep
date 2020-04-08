import * as React from "react";

const SvgCode = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M12 3l-2 18h2l2-18h-2zM5.707 6.293L0 12l5.707 5.707 1.414-1.414L2.828 12l4.293-4.293-1.414-1.414zm12.586 0l-1.414 1.414L21.172 12l-4.293 4.293 1.414 1.414L24 12l-5.707-5.707z" />
  </svg>
);

export default SvgCode;
