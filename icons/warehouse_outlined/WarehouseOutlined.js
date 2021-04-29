import * as React from "react";

function SvgWarehouseOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 1L1 6v17h22V6L12 1zm8 19H4V7.93l8-3.64 8 3.64V20z"
        fill="currentColor"
      />
      {","}
      <path d="M18 15H6v3h12v-3z" fill="currentColor" />
      {","}
      <path d="M18 10H6v3h12v-3z" fill="currentColor" />
    </svg>
  );
}

export default SvgWarehouseOutlined;
