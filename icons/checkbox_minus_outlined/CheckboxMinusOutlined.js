import * as React from "react";

function SvgCheckboxMinusOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 2v20h20V2H2zm17 17H5V5h14v14z"
        />
        <path d="M17 10.5H7v3h10v-3z" />
      </g>
    </svg>
  );
}

export default SvgCheckboxMinusOutlined;
