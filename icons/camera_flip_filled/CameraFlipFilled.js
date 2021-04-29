import * as React from "react";

function SvgCameraFlipFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 5l-1.5-3h-9L6 5H1v17h22V5h-5zm-2.1 14h-3.5l1.9-3h-4.2C7.8 16 6 14.2 6 11.9V9h3v2.9c0 .6.5 1.1 1.1 1.1h4.2l-1.9-3h3.5l2.8 4.5-2.8 4.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCameraFlipFilled;
