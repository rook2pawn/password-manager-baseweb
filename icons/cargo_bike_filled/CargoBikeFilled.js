import * as React from "react";

function SvgCargoBikeFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5 9v9l2 2h1.5v-7h7v7H17l2-2V9H5z" fill="currentColor" />
      {","}
      <path d="M13.5 15h-3v8h3v-8z" fill="currentColor" />
      {","}
      <path d="M10.5 7h3V4H18V1H6v3h4.5v3z" fill="currentColor" />
    </svg>
  );
}

export default SvgCargoBikeFilled;
