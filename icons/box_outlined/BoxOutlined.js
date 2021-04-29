import * as React from "react";

function SvgBoxOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24 2H0v8h1v12h22V10h1V2zM3 5h18v2H3V5zm17 14H4v-9h16v9z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBoxOutlined;
