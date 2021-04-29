import * as React from "react";

function SvgStopFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M19 5H5v14h14V5z" fill="currentColor" />
    </svg>
  );
}

export default SvgStopFilled;
