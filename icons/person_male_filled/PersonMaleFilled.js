import * as React from "react";

function SvgPersonMaleFilled(props) {
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
        d="M14.5 3.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM8 11c0-1.7 1.3-3 3-3h2c1.7 0 3 1.3 3 3v6h-1v6H9v-6H8v-6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPersonMaleFilled;
