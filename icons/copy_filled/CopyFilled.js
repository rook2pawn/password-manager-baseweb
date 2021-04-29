import * as React from "react";

function SvgCopyFilled(props) {
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
        d="M2 2h15v15H2V2zm17 17V7h3v15H7v-3h12z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCopyFilled;
