import * as React from "react";

function SvgSignalFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        <path d="M5.6 5.6L3.5 3.5C1.3 5.7 0 8.7 0 12s1.3 6.3 3.5 8.5l2.1-2.1C4 16.8 3 14.5 3 12c0-2.5 1-4.7 2.6-6.4zM20.5 3.5l-2.1 2.1C20 7.2 21 9.5 21 12c0 2.5-1 4.7-2.6 6.4l2.1 2.1c2.2-2.2 3.5-5.2 3.5-8.5s-1.3-6.3-3.5-8.5z" />
        <path d="M17 7l-2.1 2.1c.7.7 1.2 1.7 1.2 2.8 0 1.1-.5 2.1-1.2 2.8l2.1 2.1c1.3-1.3 2-3 2-5s-.8-3.5-2-4.8zM7 7c-1.3 1.3-2 3-2 5s.8 3.7 2 5l2.1-2.1c-.7-.7-1.2-1.7-1.2-2.8 0-1.1.5-2.1 1.2-2.8L7 7zM12 14a2 2 0 100-4 2 2 0 000 4z" />
      </g>
    </svg>
  );
}

export default SvgSignalFilled;
