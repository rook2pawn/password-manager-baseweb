import * as React from "react";

function SvgTrophyFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 3V1H5v2H2v3c0 2.1 1.3 3.9 3.2 4.7.6 2.6 2.7 4.6 5.3 5.2v4.2H6v3h12v-3h-4.5v-4.2c2.6-.6 4.7-2.6 5.3-5.2C20.7 10 22 8.2 22 6V3h-3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTrophyFilled;
