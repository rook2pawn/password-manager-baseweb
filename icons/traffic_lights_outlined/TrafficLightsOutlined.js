import * as React from "react";

function SvgTrafficLightsOutlined(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5 1v22h14V1H5zm11 19H8V4h8v16z" fill="currentColor" />
      {","}
      <path d="M12 9a2 2 0 100-4 2 2 0 000 4z" fill="currentColor" />
      {","}
      <path d="M12 19a2 2 0 100-4 2 2 0 000 4z" fill="currentColor" />
      {","}
      <path d="M12 14a2 2 0 100-4 2 2 0 000 4z" fill="currentColor" />
    </svg>
  );
}

export default SvgTrafficLightsOutlined;
