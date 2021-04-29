import * as React from "react";

function SvgChevronDownTwoFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        <path d="M12 21l-8-6.16v-3.79l8 6.17 8-6.17v3.79L12 21z" />
        <path d="M12 13.11L4 6.95V3.16l8 6.17 8-6.17v3.79l-8 6.16z" />
      </g>
    </svg>
  );
}

export default SvgChevronDownTwoFilled;
