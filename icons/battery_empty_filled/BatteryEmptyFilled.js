import * as React from "react";

function SvgBatteryEmptyFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M15 3V1H9v2H5v20h14V3h-4zm1 3v11H8V6h8z" fill="currentColor" />
    </svg>
  );
}

export default SvgBatteryEmptyFilled;
