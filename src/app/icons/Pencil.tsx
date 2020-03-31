import * as React from "react";

const SvgPencil = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M18.414 2a.997.997 0 00-.707.293l-2 2-1.414 1.414L3 17v4h4L21.707 6.293a.999.999 0 000-1.414l-2.586-2.586A.997.997 0 0018.414 2zm0 2.414l1.172 1.172-1.293 1.293-1.172-1.172 1.293-1.293zm-2.707 2.707l1.172 1.172L6.172 19H5v-1.172L15.707 7.121z" />
  </svg>
);

export default SvgPencil;
