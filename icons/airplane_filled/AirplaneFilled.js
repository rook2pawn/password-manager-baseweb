import * as React from "react";

function SvgAirplaneFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 9h-5.5L10 1H8v8H3.5l-2-2H0v10h1.5l2-2H8v8h2l5.5-8H21c1.7 0 3-1.3 3-3s-1.3-3-3-3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgAirplaneFilled;
