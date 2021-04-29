import * as React from "react";

function SvgPercentageFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0-3C3.79 2 2 3.79 2 6s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
        fill="currentColor"
      />
      {","}
      <path
        d="M18 17c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0-3c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
        fill="currentColor"
      />
      {","}
      <path
        d="M18.434 3.444L3.437 18.442l2.12 2.121L20.556 5.565l-2.12-2.12z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPercentageFilled;
