import * as React from "react";

function SvgTagFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M10 24l12-12V2H12L0 14l10 10z" fill="currentColor" />
    </svg>
  );
}

export default SvgTagFilled;
