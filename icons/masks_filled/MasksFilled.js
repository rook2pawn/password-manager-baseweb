import * as React from "react";

function SvgMasksFilled(props) {
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
        d="M23 9V1H9v5h8v9.9c3.4-.5 6-3.4 6-6.9zm-8 7V8H1v8c0 3.9 3.1 7 7 7s7-3.1 7-7z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMasksFilled;
