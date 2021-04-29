import * as React from "react";

function SvgSlackOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        <path d="M13 3a2 2 0 114 0v6a2 2 0 11-4 0V3zM19 9a2 2 0 112 2h-2V9z" />
      </g>
      {","}
      <g fill="currentColor">
        <path d="M21 13a2 2 0 010 4h-6a2 2 0 110-4h6zM15 19a2 2 0 11-2 2v-2h2z" />
      </g>
      {","}
      <g fill="currentColor">
        <path d="M7 15a2 2 0 114 0v6a2 2 0 11-4 0v-6zM1 15a2 2 0 012-2h2v2a2 2 0 11-4 0z" />
      </g>
      {","}
      <g fill="currentColor">
        <path d="M9 7a2 2 0 110 4H3a2 2 0 110-4h6zM9 1a2 2 0 012 2v2H9a2 2 0 110-4z" />
      </g>
    </svg>
  );
}

export default SvgSlackOutlined;
