import * as React from "react";

function SvgLightsOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M23 10.5h-7v3h7v-3z" fill="currentColor" />
      {","}
      <path d="M16 5.33v3.14l7-2.1V3.23l-7 2.1z" fill="currentColor" />
      {","}
      <path d="M16 18.67l7 2.1v-3.14l-7-2.1v3.14z" fill="currentColor" />
      {","}
      <path
        d="M1 12c0 3.87 3.13 7 7 7h6V5H8c-3.87 0-7 3.13-7 7zm10 4H8c-2.21 0-4-1.79-4-4s1.79-4 4-4h3v8z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLightsOutlined;
