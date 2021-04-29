import * as React from "react";

function SvgEarFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 19.75c0 1.79-1.46 3.25-3.25 3.25-.97 0-1.84-.43-2.44-1.1l-7.44-8.44A7.503 7.503 0 0110.5 1c2.87 0 5.37 1.62 6.62 4H14.5A5.51 5.51 0 009 10.5c0 2.42 1.55 4.53 3.85 5.25l2.87.9a3.22 3.22 0 012.28 3.1z"
        fill="currentColor"
      />
      {","}
      <path
        d="M18 8.5v5.91a6.13 6.13 0 00-1.38-.62l-2.87-.9A2.49 2.49 0 0112 10.5 2.5 2.5 0 0114.5 8h3.47c.02.17.03.33.03.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgEarFilled;
