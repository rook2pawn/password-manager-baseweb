import * as React from "react";

function SvgTrainOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 5s-2.5-4-9-4-9 4-9 4v12.5l2.76 2.76L3.02 23h3.96l3-3h4.04l3 3h3.96l-2.74-2.74L21 17.5V5zm-9-1c3.33 0 5.19 1.32 6 2.09V8H6V6.09C6.81 5.32 8.67 4 12 4zm5.26 13H6.74L6 16.26V11h12v5.26l-.74.74z"
        fill="currentColor"
      />
      {","}
      <path d="M15 13H9v3h6v-3z" fill="currentColor" />
    </svg>
  );
}

export default SvgTrainOutlined;
