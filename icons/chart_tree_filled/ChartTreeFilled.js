import * as React from "react";

function SvgChartTreeFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 15v-5h-6.5V8H17V0H7v8h3.5v2H4v5H1v7h9v-7H7v-2h10v2h-3v7h9v-7h-3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgChartTreeFilled;
