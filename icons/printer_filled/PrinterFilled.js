import * as React from "react";

function SvgPrinterFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 1H7v5h10V1zm6 11v7h-4v-4H5v4H1v-7c0-2.2 1.8-4 4-4h14c2.2 0 4 1.8 4 4zM7 17h10v6H7v-6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPrinterFilled;
