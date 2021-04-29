import * as React from "react";

function SvgRoadFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23 23L17.5 1h-4v5h-3V1h-4L1 23h9.5v-5h3v5H23zm-12.5-8V9h3v6h-3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgRoadFilled;
