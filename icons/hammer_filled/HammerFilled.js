import * as React from "react";

function SvgHammerFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22 19l-8.5-8.5L19 5l-3-3h-6L7.5 4.5 6 3 3 6l1.5 1.5-3.75 3.75 6 6 3.75-3.75L19 22l3-3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHammerFilled;
