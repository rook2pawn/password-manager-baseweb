import * as React from "react";

function SvgFingerSwipeFilled(props) {
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
        d="M23 19v-5l-9-4.5v-7C14 1.1 12.9 0 11.5 0S9 1.1 9 2.5V11H8c-1.1 0-2 .9-2 2v5l4 6h8c2.8 0 5-2.2 5-5zM3.9 4.5L6.5 1H3L.5 4.5 3 8h3.5L3.9 4.5zm16 3.5l2.6-3.5L19.9 1h-3.4L19 4.5 16.5 8h3.4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFingerSwipeFilled;
