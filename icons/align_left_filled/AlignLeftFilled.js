import * as React from "react";

function SvgAlignLeftFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M23 3H1v3h22V3z" fill="currentColor" />
      {","}
      <path d="M21 17H1v3h20v-3z" fill="currentColor" />
      {","}
      <path d="M14 10H1v3h13v-3z" fill="currentColor" />
    </svg>
  );
}

export default SvgAlignLeftFilled;
