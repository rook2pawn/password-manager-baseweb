import * as React from "react";

function SvgChartScatterFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M4 1H1v22h22v-3H4V1z" fill="currentColor" />
      {","}
      <path d="M9 10a3 3 0 100-6 3 3 0 000 6z" fill="currentColor" />
      {","}
      <path d="M15 17a3 3 0 100-6 3 3 0 000 6z" fill="currentColor" />
      {","}
      <path d="M20 8a3 3 0 100-6 3 3 0 000 6z" fill="currentColor" />
    </svg>
  );
}

export default SvgChartScatterFilled;
