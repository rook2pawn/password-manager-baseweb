import * as React from "react";

function SvgTrashOutlined(props) {
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
        d="M21 3h-1l3 3v17H13V6l3-3h-1V0h6v3zm-5 17h4V7.2L18.7 6h-1.5L16 7.2V20zm-5 3H1V1h10v22zm-7-8h4V9H4v6zm0 3v2h4v-2H4zM8 6V4H4v2h4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTrashOutlined;
