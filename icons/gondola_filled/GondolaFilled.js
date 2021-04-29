import * as React from "react";

function SvgGondolaFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23 2.75V0L1 6.5v2.75L12 6v3H7c-1.66 0-3 1.34-3 3v8c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3v-8c0-1.66-1.34-3-3-3h-4V5.11l8-2.36zM12 12v3H7v-3h5zm7 0v3h-4v-3h4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgGondolaFilled;
