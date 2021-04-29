import * as React from "react";

function SvgCalculatorOutlined(props) {
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
          d="M3 1v22h18V1H3zm15 19H6V4h12v16z"
        />
        <path d="M11 10H8v3h3v-3zM16 10h-3v3h3v-3zM11 15H8v3h3v-3zM16 15h-3v3h3v-3z" />
      </g>
    </svg>
  );
}

export default SvgCalculatorOutlined;
