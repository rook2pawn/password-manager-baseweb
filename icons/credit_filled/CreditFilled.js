import * as React from "react";

function SvgCreditFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.5 3v10.2L18 9.9v3.4l-6 4.4-6-4.4V9.9l4.5 3.3V3H1v18h22V3h-9.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCreditFilled;
