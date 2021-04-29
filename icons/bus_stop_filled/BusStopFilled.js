import * as React from "react";

function SvgBusStopFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M19 1H5v15h5.5v7h3v-7H19V1zm-3 3v3H8V4h8z" fill="currentColor" />
    </svg>
  );
}

export default SvgBusStopFilled;
