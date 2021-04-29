import * as React from "react";

function SvgTrailerFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        <path d="M9.5 22a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
        <path d="M21 16V8c0-2.8-2.2-5-5-5H1v16h3v-.5c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5v.5h8v-3h-2z" />
      </g>
    </svg>
  );
}

export default SvgTrailerFilled;
