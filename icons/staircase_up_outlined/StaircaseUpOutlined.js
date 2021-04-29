import * as React from "react";

function SvgStaircaseUpOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 10.5l3-3V1H4.5l-3 3H6L1.3 8.8l1.9 1.9L8 6v4.5z"
        fill="currentColor"
      />
      {","}
      <path d="M17 5v6h-6v6H5v6h3v-3h6v-6h6V8h3V5h-6z" fill="currentColor" />
    </svg>
  );
}

export default SvgStaircaseUpOutlined;
