import * as React from "react";

function SvgLockFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 9V8c0-3.9-3.1-7-7-7S5 4.1 5 8v1H3v14h18V9h-2zM8 8c0-2.2 1.8-4 4-4s4 1.8 4 4v1H8V8zm6 9h-4v-3h4v3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLockFilled;
