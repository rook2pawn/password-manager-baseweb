import * as React from "react";

function SvgSquareSmallOutlined(props) {
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
        d="M14 10h-4v4h4v-4zM7 7v10h10V7H7z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSquareSmallOutlined;
