import * as React from "react";

function SvgCenterOutlined(props) {
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
        d="M20.9 10.5H24v3h-3.1c-.7 3.8-3.6 6.8-7.4 7.4V24h-3v-3.1c-3.8-.7-6.8-3.6-7.4-7.4H0v-3h3.1c.7-3.8 3.6-6.8 7.4-7.4V0h3v3.1c3.8.7 6.8 3.6 7.4 7.4zM6 12c0 3.3 2.7 6 6 6s6-2.7 6-6-2.7-6-6-6-6 2.7-6 6zm9 0a3 3 0 11-6 0 3 3 0 016 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCenterOutlined;
