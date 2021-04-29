import * as React from "react";

function SvgDiamondHalfFilled(props) {
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
        d="M12 .5L.5 12 12 23.5 23.5 12 12 .5zM19.257 12L12 19.257V4.743L19.257 12z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDiamondHalfFilled;
