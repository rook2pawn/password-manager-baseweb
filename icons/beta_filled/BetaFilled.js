import * as React from "react";

function SvgBetaFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.85 9.15A4.93 4.93 0 0017 6c0-2.76-2.24-5-5-5S7 3.24 7 6v17h3v-4.61c.75.39 1.6.61 2.5.61 3.03 0 5.5-2.47 5.5-5.5 0-1.77-.84-3.34-2.15-4.35zM12.5 16a2.5 2.5 0 01-2.5-2.5V6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2v3c.17 0 .33-.03.5-.05V11a2.5 2.5 0 010 5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBetaFilled;
