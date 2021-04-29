import * as React from "react";

function SvgKeyboardOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M23 4h-4v4h4V4z" fill="currentColor" />
      {","}
      <path d="M11 4H7v4h4V4z" fill="currentColor" />
      {","}
      <path d="M17 4h-4v4h4V4z" fill="currentColor" />
      {","}
      <path d="M5 4H1v4h4V4z" fill="currentColor" />
      {","}
      <path d="M15 10H9v4h6v-4z" fill="currentColor" />
      {","}
      <path d="M23 10h-6v4h6v-4z" fill="currentColor" />
      {","}
      <path d="M7 10H1v4h6v-4z" fill="currentColor" />
      {","}
      <path d="M23 16H1v4h22v-4z" fill="currentColor" />
    </svg>
  );
}

export default SvgKeyboardOutlined;
