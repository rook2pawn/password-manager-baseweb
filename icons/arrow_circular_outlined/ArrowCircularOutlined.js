import * as React from "react";

function SvgArrowCircularOutlined(props) {
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
        d="M4.9 5H.5l3-3H11v7.5l-3 3V6.3C6.2 7.5 5 9.6 5 12c0 3.5 2.6 6.4 6 6.9v3c-5-.5-9-4.7-9-9.9 0-2.7 1.1-5.2 2.9-7zM22 12c0 2.7-1.1 5.2-2.9 7h4.4l-3 3H13v-7.5l3-3v6.2c1.8-1.2 3-3.3 3-5.7 0-3.5-2.6-6.4-6-6.9v-3c5 .5 9 4.7 9 9.9z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgArrowCircularOutlined;
