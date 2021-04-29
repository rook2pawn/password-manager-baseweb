import * as React from "react";

function SvgEnterOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M20 16h-3v4H7V4h10v4h3V1H4v22h16v-7z" fill="currentColor" />
      {","}
      <path
        d="M15.4 7h-3.48l-3.65 5 3.65 5h3.48l-2.57-3.5H20v-3h-7.17L15.4 7z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgEnterOutlined;
