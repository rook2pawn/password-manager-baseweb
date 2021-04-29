import * as React from "react";

function SvgPlayerPauseFilled(props) {
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
        d="M2 3h7v18H2V3zm13 0h7v18h-7V3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPlayerPauseFilled;
