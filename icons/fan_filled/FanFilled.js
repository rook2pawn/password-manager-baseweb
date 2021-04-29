import * as React from "react";

function SvgFanFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        <path d="M20 5.5C20 3 18 1 15.5 1 14.1 1 13 2.1 13 3.5V11h1.5c3 0 5.5-2.5 5.5-5.5zM4 18.5C4 21 6 23 8.5 23c1.4 0 2.5-1.1 2.5-2.5V13H9.5c-3 0-5.5 2.5-5.5 5.5zM20.5 13H13v1.5c0 3 2.5 5.5 5.5 5.5 2.5 0 4.5-2 4.5-4.5 0-1.4-1.1-2.5-2.5-2.5zM5.5 4C3 4 1 6 1 8.5 1 9.9 2.1 11 3.5 11H11V9.5C11 6.5 8.5 4 5.5 4z" />
      </g>
    </svg>
  );
}

export default SvgFanFilled;
