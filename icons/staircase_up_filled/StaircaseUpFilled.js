import * as React from "react";

function SvgStaircaseUpFilled(props) {
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
        d="M11 7.5l-3 3V6l-4.8 4.7-1.9-1.9L6 4H1.5l3-3H11v6.5zm6 3.5V5h6v18H5v-6h6v-6h6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgStaircaseUpFilled;
