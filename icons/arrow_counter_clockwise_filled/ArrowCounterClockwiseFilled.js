import * as React from "react";

function SvgArrowCounterClockwiseFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13 3c-5 0-9 4-9 9v.5L0 9.3v3.8l6 4.7 6-4.7V9.3l-4.9 3.8c-.1-.4-.1-.8-.1-1.2 0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6v3c5 0 9-4 9-9S18 3 13 3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgArrowCounterClockwiseFilled;
