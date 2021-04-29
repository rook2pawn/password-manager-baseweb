import * as React from "react";

function SvgTextUnderlineFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        <path d="M21 19H3v3h18v-3zM11.7 17h.6c1.4 0 2.6-.4 3.7-1.1V17h3V2h-3v8.3c0 2-1.7 3.7-3.7 3.7h-.6c-2 0-3.7-1.7-3.7-3.7V2H5v8.3C5 14 8 17 11.7 17z" />
      </g>
    </svg>
  );
}

export default SvgTextUnderlineFilled;
