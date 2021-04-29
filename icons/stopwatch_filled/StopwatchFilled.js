import * as React from "react";

function SvgStopwatchFilled(props) {
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
        d="M9 1h6v3H9V1zm3 3c-5.2 0-9.5 4.2-9.5 9.5S6.7 23 12 23s9.5-4.2 9.5-9.5c0-2.2-.7-4.3-2-5.9L12.1 15 10 12.9l7.3-7.3C15.8 4.6 14 4 12 4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgStopwatchFilled;
