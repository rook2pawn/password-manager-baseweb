import * as React from "react";

function SvgFlashlightFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 1H4v2.5L7 8v15h10V8l3-4.5V1zm-6.5 11h-3V8h3v4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFlashlightFilled;
