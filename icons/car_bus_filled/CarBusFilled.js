import * as React from "react";

function SvgCarBusFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23 5V3c0-1.66-1.34-3-3-3h-9C9.34 0 8 1.34 8 3v2H7v4h4V4h9v6h-5.25c.49.43.89.97 1.12 1.6l.84 2.4H19v3h4v-7h1V5h-1z"
        fill="currentColor"
      />
      {","}
      <path
        d="M14 12.3c-.3-.8-1.1-1.3-1.9-1.3H4.9c-.9 0-1.6.5-1.9 1.3L1.7 16H0v3h1v4h3v-1h9v1h3v-4h1v-3h-1.7L14 12.3zM6 20H3v-2h3v2zm8 0h-3v-2h3v2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCarBusFilled;
