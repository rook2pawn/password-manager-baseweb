import * as React from "react";

function SvgDocumentFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 1v22h18V1H3zm12 14H7v-3h8v3zm2-6H7V6h10v3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDocumentFilled;
