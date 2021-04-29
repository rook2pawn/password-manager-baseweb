import * as React from "react";

function SvgDoorFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 20V1H4v19H1v3h22v-3h-3zm-10-7H7V8h3v5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDoorFilled;
