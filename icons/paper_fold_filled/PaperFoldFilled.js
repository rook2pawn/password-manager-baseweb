import * as React from "react";

function SvgPaperFoldFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        <path d="M1 4l5-1.9v18.5l-5 1.9V4zM14 3.5V22l-5-1.5V2l5 1.5zM22 1.5V20l-5 1.9V3.4l5-1.9z" />
      </g>
    </svg>
  );
}

export default SvgPaperFoldFilled;
