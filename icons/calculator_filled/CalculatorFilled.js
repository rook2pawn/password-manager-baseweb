import * as React from "react";

function SvgCalculatorFilled(props) {
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
        d="M3 1v22h18V1H3zm13 14h-3v-3h3v3zm-5 0H8v-3h3v3zm0 2v3H8v-3h3zm2 0h3v3h-3v-3zm5-9H6V4h12v4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCalculatorFilled;
