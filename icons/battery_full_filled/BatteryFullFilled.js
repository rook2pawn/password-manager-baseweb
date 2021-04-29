import * as React from "react";

function SvgBatteryFullFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M15 3V1H9v2H5v20h14V3h-4zm1 5H8V6h8v2z" fill="currentColor" />
    </svg>
  );
}

export default SvgBatteryFullFilled;
