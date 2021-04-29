import * as React from "react";

function SvgArrowUpDownOutlined(props) {
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
        d="M11 6.8l5.5-4 5.5 4v3.5l-4-3V20h-3V7.3l-4 3V6.8zM9 4v13.7l4-3v3.5l-5.5 4-5.5-4v-3.5l4 3V4h3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgArrowUpDownOutlined;
