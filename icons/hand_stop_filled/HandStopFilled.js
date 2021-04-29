import * as React from "react";

function SvgHandStopFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 8.5c-1.1 0-2 .9-2 2V13c0 .6-.4 1-1 1V2.5c0-.8-.7-1.5-1.5-1.5S15 1.7 15 2.5V11h-1V1.5c0-.8-.7-1.5-1.5-1.5S11 .7 11 1.5V11h-1V2.5C10 1.7 9.3 1 8.5 1S7 1.7 7 2.5V11H6V5.5C6 4.7 5.3 4 4.5 4S3 4.7 3 5.5V14c0 5 4 9 9 9h.8c3 0 5.7-1.4 7.4-3.9 1.2-1.7 1.8-3.7 1.8-5.8V9.5c0-.6-.4-1-1-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHandStopFilled;
