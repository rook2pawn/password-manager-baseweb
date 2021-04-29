import * as React from "react";

function SvgChartFlameFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M8 7H1v4h7V7z" fill="currentColor" />
      {","}
      <path d="M10 13H1v4h9v-4z" fill="currentColor" />
      {","}
      <path d="M23 19H1v4h22v-4z" fill="currentColor" />
      {","}
      <path d="M6 1H1v4h5V1z" fill="currentColor" />
      {","}
      <path d="M20 7h-7v4h7V7z" fill="currentColor" />
      {","}
      <path d="M22 13h-9v4h9v-4z" fill="currentColor" />
      {","}
      <path d="M18 1h-5v4h5V1z" fill="currentColor" />
    </svg>
  );
}

export default SvgChartFlameFilled;
