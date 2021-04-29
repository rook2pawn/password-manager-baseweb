import * as React from "react";

function SvgCruiseControlFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        <path d="M11 3C5.5 3 1 7.5 1 13s4.5 10 10 10 10-4.5 10-10S16.5 3 11 3zM6 18c-1.3-1.3-2-3-2-5 0-3.9 3.1-7 7-7 .7 0 1.3.1 1.9.3l-2.3 2.3c-2.3.2-4.2 2.1-4.2 4.5 0 1.2.5 2.4 1.3 3.2L6 18zm7-5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2l3.8-3.8c.8.5 1.5 1.2 2 2L13 13zM19 0v5h5l-5-5z" />
      </g>
    </svg>
  );
}

export default SvgCruiseControlFilled;
