import * as React from "react";

const SvgCancel = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={25} height={25} {...props}>
    <path d="M12 2C6.489 2 2 6.489 2 12s4.489 10 10 10 10-4.489 10-10S17.511 2 12 2zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8zM8.707 7.293L7.293 8.707 10.586 12l-3.293 3.293 1.414 1.414L12 13.414l3.293 3.293 1.414-1.414L13.414 12l3.293-3.293-1.414-1.414L12 10.586 8.707 7.293z" />
  </svg>
);

export default SvgCancel;
