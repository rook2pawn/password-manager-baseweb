import * as React from "react";

function SvgStaircaseDownOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.5 8H6l4.7-4.8-1.9-1.9L4 6V1.5l-3 3V11h6.5l3-3z"
        fill="currentColor"
      />
      {","}
      <path d="M17 5v6h-6v6H5v6h3v-3h6v-6h6V8h3V5h-6z" fill="currentColor" />
    </svg>
  );
}

export default SvgStaircaseDownOutlined;
