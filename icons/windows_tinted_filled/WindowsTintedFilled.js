import * as React from "react";

function SvgWindowsTintedFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        <path d="M10.5 1L1 10.5V23h22V1H10.5zM20 6h-2v3h2v2h-2V9h-3v2h-3V9H9v2H4.7l2-2H9V6.7l.7-.7H12V4h3v2h3V4h2v2z" />
        <path d="M15 6h-3v3h3V6z" />
      </g>
    </svg>
  );
}

export default SvgWindowsTintedFilled;
