import * as React from "react";

function SvgBedOutlined(props) {
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
        d="M20 9V8h3v12h-3v-3H4v3H1V4h3v5h16zM4 12v2h16v-2H4zm1-7h6v3H5V5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBedOutlined;
