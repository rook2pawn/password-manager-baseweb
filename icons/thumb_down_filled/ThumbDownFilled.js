import * as React from "react";

function SvgThumbDownFilled(props) {
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
        d="M2 2h3v12H2V2zm5 0h10.6c1.2 0 2.2.7 2.7 1.7L23 9.5v3c0 1.4-1.1 2.5-2.5 2.5H15v6c0 1.7-1.3 3-3 3h-.5L7 14V2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgThumbDownFilled;
