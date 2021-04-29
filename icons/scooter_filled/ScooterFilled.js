import * as React from "react";

function SvgScooterFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.1 19h7l5-5-3-12H12v3h2.8l2 8-3 3h-3.7c-1.3-2.4-3.8-4-6.6-4H3v3h.5c1.9 0 3.6 1.2 4.2 3l.4 1z"
        fill="currentColor"
      />
      {","}
      <path d="M3.5 22a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill="currentColor" />
      {","}
      <path d="M20.5 22a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill="currentColor" />
    </svg>
  );
}

export default SvgScooterFilled;
