import * as React from "react";

function SvgPodiumOutlined(props) {
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
        d="M21 1v3l-2 2v14h2v3H3v-3h2V6L3 4V1h18zM8 4.8V20h8V4.8l.7-.8H7.2l.8.8zM9 6h6v4H9V6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPodiumOutlined;
