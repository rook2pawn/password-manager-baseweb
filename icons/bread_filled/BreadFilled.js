import * as React from "react";

function SvgBreadFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 1H8C4.7 1 2 3.7 2 7v3.5L4 12v11h16V12l2-1.5V7c0-3.3-2.7-6-6-6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBreadFilled;
