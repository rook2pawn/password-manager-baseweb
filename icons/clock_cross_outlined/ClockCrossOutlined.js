import * as React from "react";

function SvgClockCrossOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 11c0-4.41 3.59-8 8-8s8 3.59 8 8c0 .34-.03.67-.07 1h3.02c.03-.33.05-.66.05-1 0-6.08-4.92-11-11-11S1 4.92 1 11s4.92 11 11 11c.34 0 .67-.02 1-.05v-3.02c-.33.04-.66.07-1 .07-4.41 0-8-3.59-8-8z"
        fill="currentColor"
      />
      {","}
      <path
        d="M21.01 14.01L19 16.02l-2.01-2.01-1.98 1.98L17.02 18l-2.01 2.01 1.98 1.98L19 19.98l2.01 2.01 1.98-1.98L20.98 18l2.01-2.01-1.98-1.98z"
        fill="currentColor"
      />
      {","}
      <path
        d="M11 10.73l-2.87 2.05 1.74 2.44L14 12.27V5h-3v5.73z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgClockCrossOutlined;
