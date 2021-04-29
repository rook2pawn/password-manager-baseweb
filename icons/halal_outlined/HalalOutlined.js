import * as React from "react";

function SvgHalalOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23 14c0-2.76-2.24-5-5-5v3c1.1 0 2 .9 2 2h-4V4h-3v9.75c0 1.24-1.01 2.25-2.25 2.25H8v3h2.75c1.66 0 3.13-.79 4.09-2H23v-3z"
        fill="currentColor"
      />
      {","}
      <path
        d="M3 15.5c0 .28-.22.5-.5.5H0v3h2.5C4.43 19 6 17.43 6 15.5V4H3v11.5z"
        fill="currentColor"
      />
      {","}
      <path d="M11 4H8v10h3V4z" fill="currentColor" />
    </svg>
  );
}

export default SvgHalalOutlined;
