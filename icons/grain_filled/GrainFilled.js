import * as React from "react";

function SvgGrainFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        <path d="M9.5 12.5l2-2c1.5-1.5 1.9-3.8.9-5.8L10.5.9l-2 2C7 4.4 6.6 6.7 7.6 8.7l1.9 3.8zM13.5 12.5l-2 2 3.8 1.9c1.9 1 4.2.6 5.8-.9l2-2-3.8-1.9c-2-1-4.3-.6-5.8.9zM6.4 10.8L4.5 7l-2 2C1 10.5.6 12.8 1.6 14.8l1.9 3.8 2-2c1.5-1.6 1.9-3.9.9-5.8zM7.5 18.5l-2 2 3.8 1.9c1.9 1 4.2.6 5.8-.9l2-2-3.8-1.9c-2-1-4.3-.6-5.8.9zM21 1c-3.3 0-6 2.7-6 6v2h2c3.3 0 6-2.7 6-6V1h-2z" />
      </g>
    </svg>
  );
}

export default SvgGrainFilled;
