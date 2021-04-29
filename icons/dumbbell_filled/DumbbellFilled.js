import * as React from "react";

function SvgDumbbellFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24 9h-2V4h-7v6H9V4H2v5H0v6h2v5h7v-6h6v6h7v-5h2V9z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDumbbellFilled;
