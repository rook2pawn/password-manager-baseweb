import * as React from "react";

function SvgFishFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 1C11.92 1 7 5.92 7 12v1H1l4.99 5.01L11 23v-6h1c6.08 0 11-4.92 11-11V1h-5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFishFilled;
