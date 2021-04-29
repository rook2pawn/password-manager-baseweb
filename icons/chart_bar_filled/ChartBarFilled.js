import * as React from "react";

function SvgChartBarFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M10 5H6v13h4V5z" fill="currentColor" />
      {","}
      <path d="M16 11h-4v7h4v-7z" fill="currentColor" />
      {","}
      <path d="M22 4h-4v14h4V4z" fill="currentColor" />
      {","}
      <path d="M4 20V1H1v22h22v-3H4z" fill="currentColor" />
    </svg>
  );
}

export default SvgChartBarFilled;
