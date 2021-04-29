import * as React from "react";

function SvgLockOutlined(props) {
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
        d="M18 7v1h3v15H3V8h3V7c0-3.3 2.7-6 6-6s6 2.7 6 6zm-6-3c-1.7 0-3 1.3-3 3v1h6V7c0-1.7-1.3-3-3-3zm-6 7v9h12v-9H6zm4.5 6v-3h3v3h-3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLockOutlined;
