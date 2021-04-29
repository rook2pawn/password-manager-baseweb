import * as React from "react";

function SvgQrCodeFilled(props) {
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
        d="M2 2v20h20V2H2zm16 7h-3V6h3v3zm-3 3V9h-3V6H6v6h3v3H6v3h3v-3h3v3h6v-6h-3zm-3 0H9V9h3v3zm0 0h3v3h-3v-3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgQrCodeFilled;
