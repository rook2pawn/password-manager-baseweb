import * as React from "react";

function SvgCarClockFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 0c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm3 7h-4V2h2v3h2v2z"
        fill="currentColor"
      />
      {","}
      <path
        d="M18.2 14H18c-3.7 0-6.9-2.6-7.8-6H6.4c-.9 0-1.6.5-1.9 1.3L2.8 14H1v3h1v6h4v-1h9v1h4v-6h1v-3h-1.8zM8 19H4v-2h4v2zm9 0h-4v-2h4v2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCarClockFilled;
