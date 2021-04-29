import * as React from "react";

function SvgFigmaFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 4c0 1.66 1.34 3 3 3h3V1H8C6.34 1 5 2.34 5 4z"
        fill="currentColor"
      />
      {","}
      <path
        d="M5 12c0 1.66 1.34 3 3 3h3V9H8c-1.66 0-3 1.34-3 3z"
        fill="currentColor"
      />
      {","}
      <path
        d="M5 20c0 1.66 1.34 3 3 3s3-1.34 3-3v-3H8c-1.66 0-3 1.34-3 3z"
        fill="currentColor"
      />
      {","}
      <path
        d="M19 4c0-1.66-1.34-3-3-3h-3v6h3c1.66 0 3-1.34 3-3z"
        fill="currentColor"
      />
      {","}
      <path d="M16 15a3 3 0 100-6 3 3 0 000 6z" fill="currentColor" />
    </svg>
  );
}

export default SvgFigmaFilled;
