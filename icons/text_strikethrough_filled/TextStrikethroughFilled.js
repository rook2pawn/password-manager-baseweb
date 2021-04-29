import * as React from "react";

function SvgTextStrikethroughFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        <path d="M10.5 10C9.6 9.5 9 8.6 9 7.5 9 5.9 10.8 5 12.5 5c2.4 0 3.2 2 3.4 3H19c-.3-2-2-6-6.5-6C9.3 2 6 4.1 6 7.5c0 .9.2 1.7.6 2.5H2v3h20v-3H10.5zM15.9 15c.1.4.1.9.1 1.5 0 1.2-1.4 2.5-3.5 2.5-2.2 0-3.7-1.8-4-3h-3v.2c.4 2.8 3.1 5.8 7 5.8 4 0 6.5-2.9 6.5-5.5 0-.6 0-1-.1-1.5h-3z" />
      </g>
    </svg>
  );
}

export default SvgTextStrikethroughFilled;
