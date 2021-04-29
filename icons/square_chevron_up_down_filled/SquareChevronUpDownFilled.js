import * as React from "react";

function SvgSquareChevronUpDownFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 2v20h20V2H2zm15 14.3l-5 2.8-5-2.8V13l5 2.9 5-2.9v3.3zm0-5.3l-5-2.9L7 11V7.8L12 5l5 2.8V11z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSquareChevronUpDownFilled;
