import * as React from "react";

function SvgReportFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 2H6L1 12l5 10h12l5-10-5-10zm-7.5 3h3v7h-3V5zM12 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgReportFilled;
