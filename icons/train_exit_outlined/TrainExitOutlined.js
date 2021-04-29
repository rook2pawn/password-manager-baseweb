import * as React from "react";

function SvgTrainExitOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 11h-3v5.26l-.74.74H6.74L6 16.26V11h9V8H6V6.09C6.81 5.32 8.67 4 12 4c.35 0 .68.01 1 .05V1.03c-.32-.02-.65-.03-1-.03-6.5 0-9 4-9 4v12.5l2.76 2.76L3.02 23h3.96l3-3h4.04l3 3h3.96l-2.74-2.74L21 17.5V11z"
        fill="currentColor"
      />
      {","}
      <path d="M15 13H9v3h6v-3z" fill="currentColor" />
      {","}
      <path
        d="M19.42 3l-2.2-3h3.48L24 4.5 20.7 9h-3.48l2.2-3H15V3h4.42z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTrainExitOutlined;
