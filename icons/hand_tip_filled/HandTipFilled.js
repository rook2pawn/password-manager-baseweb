import * as React from "react";

function SvgHandTipFilled(props) {
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
        d="M23 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM16.1 15l2.5-1.5c1.4-.9 3.2-.7 4.4.5v1l-9.5 7H1v-9l4-4h7v2.4L8 14l1 1h7.1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHandTipFilled;
