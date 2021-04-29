import * as React from "react";

function SvgBusFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23 9h-1V5c0-2.21-1.79-4-4-4H6C3.79 1 2 2.79 2 5v4H1v5h1v9h4v-2h12v2h4v-9h1V9zm-4-3v7H5V6h14zM9 18H5v-2h4v2zm10-2v2h-4v-2h4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBusFilled;
