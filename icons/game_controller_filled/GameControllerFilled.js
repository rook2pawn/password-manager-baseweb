import * as React from "react";

function SvgGameControllerFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 4v15h24V4H0zm12 9H9v3H6v-3H3v-3h3V7h3v3h3v3zm3-6h3v3h-3V7zm6 9h-3v-3h3v3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgGameControllerFilled;
