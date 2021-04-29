import * as React from "react";

function SvgChartLineFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 16.62l6-6 5 5 9-9.12-2.06-2.06L15 11.38l-5-5-6 6V1H1v22h22v-3H4v-3.38z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgChartLineFilled;
