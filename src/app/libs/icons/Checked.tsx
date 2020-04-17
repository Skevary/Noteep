import * as React from "react";

const SvgChecked = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 16" {...props}>
    <path d="M3.5 2C2.676 2 2 2.676 2 3.5v9c0 .824.676 1.5 1.5 1.5h9c.824 0 1.5-.676 1.5-1.5v-9c0-.824-.676-1.5-1.5-1.5zm0 1h9c.281 0 .5.219.5.5v9c0 .281-.219.5-.5.5h-9a.494.494 0 01-.5-.5v-9c0-.281.219-.5.5-.5zm7.77 2.023L7 9.293l-2.273-2.27-.704.704L7 10.707l4.98-4.98z" />
  </svg>
);

export default SvgChecked;
