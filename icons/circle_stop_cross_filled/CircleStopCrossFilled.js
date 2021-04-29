import * as React from "react";

function SvgCircleStopCrossFilled(props) {
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
        d="M0 11C0 4.9 4.9 0 11 0s11 4.9 11 11c0 .6 0 1.2-.1 1.8-.6-.2-1.2-.3-1.9-.3-3.6 0-6.5 2.9-6.5 6.5 0 .9.2 1.8.5 2.6-.9.2-2 .4-3 .4-6.1 0-11-4.9-11-11zm20 6l2-2 2 2-2 2 2 2-2 2-2-2-2 2-2-2 2-2-2-2 2-2 2 2zM8 14h6V8H8v6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCircleStopCrossFilled;
