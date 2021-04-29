import * as React from "react";

function SvgBoxHeartFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 3v18h22V3H1zm15 9.7L12 16l-4-3.3c-.6-.5-1-1.2-1-2.1 0-1.5 1.2-2.7 2.6-2.7 1 0 1.9.6 2.4 1.5.4-.9 1.3-1.5 2.4-1.5 1.5 0 2.6 1.2 2.6 2.7 0 .9-.4 1.7-1 2.1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBoxHeartFilled;
