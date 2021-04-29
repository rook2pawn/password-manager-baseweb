import * as React from "react";

function SvgRocketFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 21a21.5 21.5 0 006.03-1.47l-4.56-4.56A21.5 21.5 0 003 21z"
        fill="currentColor"
      />
      {","}
      <path
        d="M22 2c-1.41.16-7.74 1.01-12.85 6H5l-2 2 11 11 2-2v-4.15C20.99 9.73 21.84 3.41 22 2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgRocketFilled;
