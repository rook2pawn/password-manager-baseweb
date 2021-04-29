import * as React from "react";

function SvgDollyFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        <path d="M20 17H7V5.5C7 3 5 1 2.5 1H1v3h1.5C3.3 4 4 4.7 4 5.5V20c0 1.7 1.3 3 3 3s3-1.3 3-3h7c0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3z" />
        <path d="M21 3H9v12h12V3z" />
      </g>
    </svg>
  );
}

export default SvgDollyFilled;
