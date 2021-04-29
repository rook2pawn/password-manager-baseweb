import * as React from "react";

function SvgReceiptFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 1v22l5.5-3 3.5 3 3.5-3 5.5 3V1H3zm14 8H7V6h10v3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgReceiptFilled;
