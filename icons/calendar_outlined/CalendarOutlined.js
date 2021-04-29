import * as React from "react";

function SvgCalendarOutlined(props) {
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
        d="M20 1v3h3v19H1V4h3V1h3v3h10V1h3zm0 8V7H4v2h16zM4 12v8h16v-8H4zm2 2h3v3H6v-3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCalendarOutlined;
