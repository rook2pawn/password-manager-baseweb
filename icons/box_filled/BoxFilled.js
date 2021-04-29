import * as React from "react";

function SvgBoxFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        <path d="M22 8H2v13h20V8zM23 2H1v4h22V2z" />
      </g>
    </svg>
  );
}

export default SvgBoxFilled;
