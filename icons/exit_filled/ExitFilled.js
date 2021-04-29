import * as React from "react";

function SvgExitFilled(props) {
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
        d="M7 8.5v7h7V23H1V1h13v7.5H7zM16.4 7h3.4l3.7 5-3.7 5h-3.4l2.5-3.5H9v-3h9.9L16.4 7z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgExitFilled;
