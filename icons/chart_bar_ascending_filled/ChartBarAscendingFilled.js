import * as React from "react";

function SvgChartBarAscendingFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M11 10H7v12h4V10z" fill="currentColor" />
      {","}
      <path d="M5 14H1v8h4v-8z" fill="currentColor" />
      {","}
      <path d="M17 6h-4v16h4V6z" fill="currentColor" />
      {","}
      <path d="M23 2h-4v20h4V2z" fill="currentColor" />
    </svg>
  );
}

export default SvgChartBarAscendingFilled;
