import * as React from "react";

function SvgBeaconFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 3H1v15h6v3h10v-3h6V3H7zm13 3v9H4V6h3v6h10V6h3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBeaconFilled;
