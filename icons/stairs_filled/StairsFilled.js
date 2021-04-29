import * as React from "react";

function SvgStairsFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M16 1v5h-5v5H6v5H1v7h22V1h-7z" fill="currentColor" />
    </svg>
  );
}

export default SvgStairsFilled;
