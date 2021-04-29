import * as React from "react";

function SvgTreeNutFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.01 11s-.5 8.73 8 12c8.5-3.27 8-12 8-12h-16z"
        fill="currentColor"
      />
      {","}
      <path
        d="M13.5 3.11V1h-3v2.11C4.79 3.89 3.5 9 3.5 9h17s-1.29-5.11-7-5.89z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTreeNutFilled;
