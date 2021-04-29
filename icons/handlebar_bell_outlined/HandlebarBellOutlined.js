import * as React from "react";

function SvgHandlebarBellOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 10.5C18 5.81 14.19 2 9.5 2 4.81 2 1 5.81 1 10.5 1 15.19 4.81 19 9.5 19c4.69 0 8.5-3.81 8.5-8.5zm-14 0C4 7.47 6.47 5 9.5 5S15 7.47 15 10.5 12.53 16 9.5 16A5.51 5.51 0 014 10.5z"
        fill="currentColor"
      />
      {","}
      <path d="M9.5 13a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" fill="currentColor" />
      {","}
      <path
        d="M24 9.5a2.5 2.5 0 00-5 0c0 .79.38 1.49.95 1.95C19.47 16.8 14.97 21 9.5 21c-.16 0-.33 0-.5-.02v3.01c.17.01.34.01.5.01 7.09 0 12.92-5.51 13.45-12.47.63-.45 1.05-1.19 1.05-2.03z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHandlebarBellOutlined;
