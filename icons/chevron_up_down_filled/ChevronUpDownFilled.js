import * as React from "react";

function SvgChevronUpDownFilled(props) {
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
        d="M20 10.4V6.7l-8-5.5-8 5.5v3.7l8-5.6 8 5.6zm0 6.9v-3.7l-8 5.6-8-5.6v3.7l8 5.5 8-5.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgChevronUpDownFilled;
