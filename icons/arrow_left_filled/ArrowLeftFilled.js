import * as React from "react";

function SvgArrowLeftFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22 13.5H6.3l5.5 7.5H8.3l-6.5-9 6.5-9h3.5l-5.5 7.5H22v3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgArrowLeftFilled;
