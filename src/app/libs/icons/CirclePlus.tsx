import * as React from "react";

const SvgCirclePlus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M12 2C6.489 2 2 6.489 2 12s4.489 10 10 10 10-4.489 10-10S17.511 2 12 2zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8zm-1 3v4H7v2h4v4h2v-4h4v-2h-4V7h-2z" />
  </svg>
);

export default SvgCirclePlus;
