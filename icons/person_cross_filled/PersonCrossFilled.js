import * as React from "react";

function SvgPersonCrossFilled(props) {
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
        d="M10 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm3.1 11H1v-3c0-3.3 2.7-6 6-6h6.1c-1 1.2-1.6 2.8-1.6 4.5 0 1.7.6 3.3 1.6 4.5zm7.9-9l2 2-2.5 2.5L23 21l-2 2-2.5-2.5L16 23l-2-2 2.5-2.5L14 16l2-2 2.5 2.5L21 14z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPersonCrossFilled;
