import * as React from "react";

const SvgBoxAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={25} height={25} {...props}>
    <path d="M5.75 3a1 1 0 00-.863.496l-1.75 3A1 1 0 003 7v12c0 1.093.907 2 2 2h14c1.093 0 2-.907 2-2V7a1 1 0 00-.137-.504l-1.75-3A1 1 0 0018.25 3H5.75zm.574 2h11.352l1.166 2H5.158l1.166-2zM5 9h14v10H5V9zm4 2v2h6v-2H9z" />
  </svg>
);

export default SvgBoxAlt;
