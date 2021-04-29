import * as React from "react";

function SvgOctagonalStarFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 9V4h-5l-3-3-3 3H4v5l-3 3 3 3v5h5l3 3 3-3h5v-5l3-3-3-3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgOctagonalStarFilled;
