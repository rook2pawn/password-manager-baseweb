import * as React from "react";

function SvgBatteryEmptyOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M15 3V1H9v2H5v20h14V3h-4zm1 17H8V6h8v14z" fill="currentColor" />
      {","}
      <path d="M14 15h-4v3h4v-3z" fill="currentColor" />
    </svg>
  );
}

export default SvgBatteryEmptyOutlined;
