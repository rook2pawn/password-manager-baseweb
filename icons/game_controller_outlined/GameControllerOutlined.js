import * as React from "react";

function SvgGameControllerOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 3v17h24V3H0zm21 14H3V6h18v11z" fill="currentColor" />
      {","}
      <path d="M7 15h3v-2h2v-3h-2V8H7v2H5v3h2v2z" fill="currentColor" />
      {","}
      <path d="M19 12h-3v3h3v-3z" fill="currentColor" />
      {","}
      <path d="M17 8h-3v3h3V8z" fill="currentColor" />
    </svg>
  );
}

export default SvgGameControllerOutlined;
