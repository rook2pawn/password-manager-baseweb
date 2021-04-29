import * as React from "react";

function SvgCableCarFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17 4V1H7v3H4v17h3v2h10v-2h3V4h-3zm0 9h-3.5V7H17v6zm-6.5 0H7V7h3.5v6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCableCarFilled;
