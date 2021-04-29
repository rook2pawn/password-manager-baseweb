import * as React from "react";

function SvgPowerFilled(props) {
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
        d="M10.5 1h3v10h-3V1zm-9 11.5C1.5 18.3 6.2 23 12 23s10.5-4.7 10.7-10.5c0-3.8-2.1-7.2-5.3-9.1L15.9 6c2.3 1.3 3.7 3.8 3.7 6.5 0 4.1-3.4 7.5-7.5 7.5s-7.5-3.4-7.5-7.5C4.6 9.8 6 7.3 8.3 6L6.8 3.4c-3.3 1.9-5.3 5.4-5.3 9.1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPowerFilled;
