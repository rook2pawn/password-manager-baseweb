import * as React from "react";

function SvgSquareSmallFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 7H7v10h10V7z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSquareSmallFilled;
