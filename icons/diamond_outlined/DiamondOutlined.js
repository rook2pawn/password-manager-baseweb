import * as React from "react";

function SvgDiamondOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.3 12L12 4.7 4.7 12H12v7.3l7.3-7.3zM.5 12L12 .5 23.5 12 12 23.5.5 12z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDiamondOutlined;
