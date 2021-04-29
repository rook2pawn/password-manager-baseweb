import * as React from "react";

function SvgCheckboxMinusFilled(props) {
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
        d="M2 2v20h20V2H2zm16 8.5H6v3h12v-3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCheckboxMinusFilled;
