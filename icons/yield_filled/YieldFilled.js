import * as React from "react";

function SvgYieldFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.45 9L12 13.35 9.55 9h4.9zM23 4H1l11 19.55L23 4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgYieldFilled;
