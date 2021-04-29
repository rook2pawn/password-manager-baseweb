import * as React from "react";

function SvgTramFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.48 23l-3.79-3.79A4.975 4.975 0 0019 15V7c0-1.66-1.34-3-3-3h-1l3-3H6l3 3H8C6.34 4 5 5.34 5 7v8c0 1.77.92 3.33 2.31 4.21L3.52 23h3.96l3-3h3.04l3 3h3.96zM14 17h-4v-2h4v2zM8 7h8v5H8V7z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTramFilled;
