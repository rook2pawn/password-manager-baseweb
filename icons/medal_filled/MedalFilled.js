import * as React from "react";

function SvgMedalFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M15 9l8-8h-6l-5 5-5-5H1l8 8h6z" fill="currentColor" />
      {","}
      <path d="M6 14v6l6 3 6-3v-6l-6-3.5L6 14z" fill="currentColor" />
    </svg>
  );
}

export default SvgMedalFilled;
