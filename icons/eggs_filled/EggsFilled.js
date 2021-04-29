import * as React from "react";

function SvgEggsFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 14c0 4.42-3.58 8-8 8s-8-3.58-8-8S7.5 2 12 2s8 7.58 8 12z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgEggsFilled;
