import * as React from "react";

function SvgCameraFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 4l-1.5-3h-9L6 4H1v17h22V4h-5zM8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCameraFilled;
