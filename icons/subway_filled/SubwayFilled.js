import * as React from "react";

function SvgSubwayFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24 12c0-6.63-5.37-12-12-12S0 5.37 0 12c0 4.09 2.04 7.7 5.16 9.86L3.02 24h3.96l3-3h4.04l3 3h3.96l-2.14-2.14C21.96 19.7 24 16.09 24 12zM7 18v-2h3v2H7zm0-7c0-2.76 2.24-5 5-5s5 2.23 5 5v2H7v-2zm7 5h3v2h-3v-2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSubwayFilled;
