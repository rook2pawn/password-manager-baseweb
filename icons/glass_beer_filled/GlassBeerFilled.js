import * as React from "react";

function SvgGlassBeerFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 6h-2c0-2.8-2.2-5-5-5H8C5.2 1 3 3.2 3 6v17h16v-4h2c1.7 0 3-1.3 3-3V9c0-1.7-1.3-3-3-3zM6 6c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2H6zm15 10h-2V9h2v7z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgGlassBeerFilled;
