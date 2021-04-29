import * as React from "react";

function SvgArrowUpFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 8.3v3.5l-7.5-5.5V22h-3V6.3L3 11.8V8.3l9-6.5 9 6.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgArrowUpFilled;
