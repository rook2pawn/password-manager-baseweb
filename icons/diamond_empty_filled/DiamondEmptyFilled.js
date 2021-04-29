import * as React from "react";

function SvgDiamondEmptyFilled(props) {
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
        d="M.5 12L12 .5 23.5 12 12 23.5.5 12zM12 19.257L19.257 12 12 4.743 4.743 12 12 19.257z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDiamondEmptyFilled;
