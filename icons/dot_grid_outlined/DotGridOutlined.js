import * as React from "react";

function SvgDotGridOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        <path d="M6 2H2v4h4V2zM22 2h-4v4h4V2zM14 2h-4v4h4V2zM6 18H2v4h4v-4zM22 18h-4v4h4v-4zM14 18h-4v4h4v-4zM6 10H2v4h4v-4zM22 10h-4v4h4v-4zM14 10h-4v4h4v-4z" />
      </g>
    </svg>
  );
}

export default SvgDotGridOutlined;
