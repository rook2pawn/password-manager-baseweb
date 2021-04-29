import * as React from "react";

function SvgRadioactiveFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.5 7.67C8 8.54 7 10.15 7 12H1c0-4.07 2.22-7.62 5.5-9.52l3 5.19z"
        fill="currentColor"
      />
      {","}
      <path
        d="M23 12h-6c0-1.85-1-3.46-2.5-4.33l3-5.19C20.78 4.38 23 7.93 23 12z"
        fill="currentColor"
      />
      {","}
      <path
        d="M17.5 21.52C15.88 22.46 14 23 12 23s-3.88-.54-5.5-1.48l3-5.19c1.52.89 3.48.89 5 0l3 5.19z"
        fill="currentColor"
      />
      {","}
      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" fill="currentColor" />
    </svg>
  );
}

export default SvgRadioactiveFilled;
