import * as React from "react";

function SvgShowFilled(props) {
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
        d="M0 12C1.4 6.2 6.2 2 12 2s10.6 4.2 12 10c-1.4 5.8-6.2 10-12 10S1.4 17.8 0 12zm7 0c0 2.8 2.2 5 5 5s5-2.2 5-5-2.2-5-5-5-5 2.2-5 5zm7 0a2 2 0 11-4 0 2 2 0 014 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgShowFilled;
