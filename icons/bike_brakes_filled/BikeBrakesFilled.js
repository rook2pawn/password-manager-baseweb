import * as React from "react";

function SvgBikeBrakesFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M16 14V6H1v8.03l16 6.19V17l-7.76-3H16z" fill="currentColor" />
      {","}
      <path
        d="M22 4c-2.21 0-4 1.79-4 4v4c0 2.21 1.79 4 4 4h1V4h-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBikeBrakesFilled;
