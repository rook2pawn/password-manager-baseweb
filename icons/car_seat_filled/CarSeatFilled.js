import * as React from "react";

function SvgCarSeatFilled(props) {
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
        d="M8 5h8V4c0-1.7-1.3-3-3-3h-2C9.3 1 8 2.3 8 4v1zm6.5 2c.3 0 .6 0 .9.1L6 16.5v-6C6 8.6 7.6 7 9.5 7h5zm-7 12H18v.5c0 .8-.7 1.5-1.5 1.5h-9c-.8 0-1.5-.7-1.5-1.5V19H3v.5C3 22 5 24 7.5 24h9c2.5 0 4.5-2 4.5-4.5V19h-3v-8.5c0-.6-.2-1.1-.4-1.6L7.5 19z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCarSeatFilled;
