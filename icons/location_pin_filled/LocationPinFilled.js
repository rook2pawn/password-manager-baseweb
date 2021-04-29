import * as React from "react";

function SvgLocationPinFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 10c0-5-4-9-9-9s-9 4-9 9c0 4.5 3.2 8.1 7.5 8.9V23h3v-4.1c4.3-.8 7.5-4.4 7.5-8.9zm-9 2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLocationPinFilled;
