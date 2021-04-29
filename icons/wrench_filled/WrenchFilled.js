import * as React from "react";

function SvgWrenchFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23 19l-4 4-9.4-9.4c-.7.2-1.4.4-2.1.4C3.9 14 1 11.1 1 7.5c0-1 .2-2 .7-2.8l3.8 3.8 2.2-.8.8-2.2-3.8-3.8c.9-.4 1.8-.7 2.8-.7C11.1 1 14 3.9 14 7.5c0 .8-.1 1.5-.4 2.1L23 19z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgWrenchFilled;
