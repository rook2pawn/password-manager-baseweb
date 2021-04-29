import * as React from "react";

function SvgCirclePlusOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 12C1 5.9 5.9 1 12 1s11 4.9 11 11-4.9 11-11 11S1 18.1 1 12zm3 0c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8zm9.5-6v4.5H18v3h-4.5V18h-3v-4.5H6v-3h4.5V6h3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCirclePlusOutlined;
