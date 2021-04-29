import * as React from "react";

function SvgShowOutlined(props) {
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
        d="M20.9 12C19.6 7.8 16 5 12 5s-7.6 2.8-8.9 7c1.3 4.2 4.9 7 8.9 7s7.6-2.8 8.9-7zM0 12C1.4 6.2 6.2 2 12 2s10.6 4.2 12 10c-1.4 5.8-6.2 10-12 10S1.4 17.8 0 12zm16 0a4 4 0 11-8 0 4 4 0 018 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgShowOutlined;
