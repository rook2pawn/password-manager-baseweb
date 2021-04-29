import * as React from "react";

function SvgChartPieFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 14h11.8c-.93 4.56-4.97 8-9.8 8-5.52 0-10-4.48-10-10 0-4.83 3.44-8.87 8-9.8V14z"
        fill="currentColor"
      />
      {","}
      <path
        d="M21.95 11H13V2.05c4.72.47 8.48 4.23 8.95 8.95z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgChartPieFilled;
