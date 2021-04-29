import * as React from "react";

function SvgEighteenPlusOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M24 3h-3V0h-3v3h-3v3h3v3h3V6h3V3z" fill="currentColor" />
      {","}
      <path
        d="M17.5 11.5c0-2.21-1.79-4-4-4s-4 1.79-4 4c0 .87.28 1.66.75 2.32-.77.76-1.25 1.79-1.25 2.93C9 19.09 11.02 21 13.5 21s4.5-1.91 4.5-4.25c0-1.14-.48-2.17-1.25-2.93.47-.66.75-1.45.75-2.32zm-4-1.03c.57 0 1.03.46 1.03 1.03 0 .57-.46 1.03-1.03 1.03-.57 0-1.03-.46-1.03-1.03 0-.57.46-1.03 1.03-1.03zm0 7.53c-.83 0-1.5-.56-1.5-1.25s.67-1.25 1.5-1.25 1.5.56 1.5 1.25S14.33 18 13.5 18z"
        fill="currentColor"
      />
      {","}
      <path d="M6 8H1.5v3H3v7H1v3h7v-3H6V8z" fill="currentColor" />
    </svg>
  );
}

export default SvgEighteenPlusOutlined;
