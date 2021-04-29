import * as React from "react";

function SvgBarcodeOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5 4H1v16h4V4z" fill="currentColor" />
      {","}
      <path d="M23 4h-4v16h4V4z" fill="currentColor" />
      {","}
      <path d="M11 4H7v14h4V4z" fill="currentColor" />
      {","}
      <path d="M17 4h-4v14h4V4z" fill="currentColor" />
    </svg>
  );
}

export default SvgBarcodeOutlined;
