import * as React from "react";

function SvgClockAddOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8h3c0-6.1-4.9-11-11-11S1 5.9 1 12s4.9 11 11 11v-3c-4.4 0-8-3.6-8-8z"
        fill="currentColor"
      />
      {","}
      <path
        d="M11 11.7l-2.9 2.1 1.8 2.4 4.1-2.9V6h-3v5.7z"
        fill="currentColor"
      />
      {","}
      <path d="M23 17h-3v-3h-3v3h-3v3h3v3h3v-3h3v-3z" fill="currentColor" />
    </svg>
  );
}

export default SvgClockAddOutlined;
