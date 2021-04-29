import * as React from "react";

function SvgCarClockOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24 7c0-3.9-3.1-7-7-7s-7 3.1-7 7c0 .3 0 .7.1 1H6.4c-.8 0-1.6.5-1.9 1.3L2.4 15H1v3h1v5h4v-1h9v1h4v-5h1v-3h-1.4l-.4-1.1c3.3-.6 5.8-3.4 5.8-6.9zm-8 12H5v-1h3v-2H5.2l1.9-5h4.2c.9 1.3 2.2 2.2 3.7 2.7l.9 2.3H13v2h3v1zm1-8c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
        fill="currentColor"
      />
      {","}
      <path d="M18 4h-2v4h3V6h-1V4z" fill="currentColor" />
    </svg>
  );
}

export default SvgCarClockOutlined;
