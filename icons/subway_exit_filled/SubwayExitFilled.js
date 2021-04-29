import * as React from "react";

function SvgSubwayExitFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.22 9h3.48L24 4.5 20.7 0h-3.48l2.2 3H14v3h5.42l-2.2 3z"
        fill="currentColor"
      />
      {","}
      <path
        d="M23 13c0-.68-.06-1.35-.18-2H16.9c.07.32.1.66.1 1v2H7v-2c0-2.76 2.24-5 5-5V2C5.92 2 1 6.92 1 13c0 3.56 1.68 6.72 4.29 8.73L3.02 24h3.96l3-3h4.04l3 3h3.96l-2.27-2.27C21.32 19.72 23 16.56 23 13zm-13 6H7v-2h3v2zm7 0h-3v-2h3v2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSubwayExitFilled;
