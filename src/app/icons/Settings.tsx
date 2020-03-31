import * as React from "react";

const SvgSettings = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M9.666 2l-.49 2.523a7.951 7.951 0 00-2.244 1.291L4.508 4.98 2.172 9.02l1.941 1.688A8.006 8.006 0 004 12c0 .409.04.833.113 1.291v.002L2.172 14.98l2.336 4.041 2.422-.834a7.952 7.952 0 002.246 1.29L9.666 22h4.668l.49-2.523a7.941 7.941 0 002.244-1.291l2.424.835 2.334-4.04-1.94-1.69c.075-.458.114-.883.114-1.291 0-.408-.039-.832-.113-1.29v-.001l1.941-1.69-2.336-4.04-2.422.833a7.952 7.952 0 00-2.246-1.289L14.334 2H9.666zm1.648 2h1.372l.388 2 1.043.395a5.941 5.941 0 011.684.964l.863.707 1.922-.66.685 1.186-1.535 1.336.176 1.1v.001c.061.375.088.69.088.971s-.027.596-.088.97l-.178 1.1 1.536 1.336-.686 1.188-1.92-.662-.865.709a5.93 5.93 0 01-1.682.964h-.002L13.072 18l-.388 2h-1.37l-.388-2-1.043-.395a5.941 5.941 0 01-1.684-.964l-.863-.707-1.922.66-.685-1.186 1.537-1.338-.178-1.095v-.002A6.158 6.158 0 016 12c0-.281.027-.596.088-.97l.178-1.1-1.537-1.336.685-1.188 1.922.662.863-.709a5.941 5.941 0 011.684-.964L10.926 6l.388-2zM12 8c-2.197 0-4 1.803-4 4s1.803 4 4 4 4-1.803 4-4-1.803-4-4-4zm0 2c1.111 0 2 .889 2 2s-.889 2-2 2-2-.889-2-2 .889-2 2-2z" />
  </svg>
);

export default SvgSettings;
