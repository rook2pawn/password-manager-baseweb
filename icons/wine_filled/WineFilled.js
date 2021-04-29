import * as React from "react";

function SvgWineFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 4v4.4c1.8.8 3 2.6 3 4.6v10H13V13c0-2.1 1.2-3.8 3-4.6V4h-1V1h6v3h-1zM4.5 16.7C2.5 16.1 1 14.2 1 12V7h10v5c0 2.2-1.5 4.1-3.5 4.7V20H10v3H2v-3h2.5v-3.3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgWineFilled;
