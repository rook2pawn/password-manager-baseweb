import * as React from "react";

function SvgCheckPlusOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.94 5.82L10 16.76l-5.44-5.44-2.12 2.12L10 21 23.06 7.94l-2.12-2.12z"
        fill="currentColor"
      />
      {","}
      <path d="M8 11h3V8h3V5h-3V2H8v3H5v3h3v3z" fill="currentColor" />
    </svg>
  );
}

export default SvgCheckPlusOutlined;
