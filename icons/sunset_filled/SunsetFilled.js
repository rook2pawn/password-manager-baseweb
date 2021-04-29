import * as React from "react";

function SvgSunsetFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M20 18H4v3h16v-3z" fill="currentColor" />
      {","}
      <path
        d="M17.74 13A6.995 6.995 0 0012 2a6.995 6.995 0 00-5.74 11H1v3h22v-3h-5.26z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSunsetFilled;
