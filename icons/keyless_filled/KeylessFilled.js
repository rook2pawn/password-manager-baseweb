import * as React from "react";

function SvgKeylessFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        <path d="M7.8 7.8l2.1 2.1c1.1-1.1 3.1-1.1 4.2 0l2.1-2.1C15.1 6.7 13.6 6 12 6s-3.1.6-4.2 1.8z" />
        <path d="M12 4c2.1 0 4.1.8 5.7 2.3l2.1-2.1C17.7 2.1 15 1 12 1S6.3 2.1 4.2 4.2l2.1 2.1C7.9 4.8 9.9 4 12 4zM15.5 12h-7C6.6 12 5 13.6 5 15.5V23h14v-7.5c0-1.9-1.6-3.5-3.5-3.5zm-.5 8H9v-3h6v3z" />
      </g>
    </svg>
  );
}

export default SvgKeylessFilled;
