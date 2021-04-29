import * as React from "react";

function SvgSunsetOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M20 18H4v3h16v-3z" fill="currentColor" />
      {","}
      <path
        d="M19.41 13c.38-.93.59-1.94.59-3 0-4.42-3.58-8-8-8s-8 3.58-8 8c0 1.06.21 2.07.59 3H1v3h22v-3h-3.59zM8.03 13C7.4 12.16 7 11.13 7 10c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.13-.39 2.16-1.03 3H8.03z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSunsetOutlined;
