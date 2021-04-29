import * as React from "react";

function SvgStadiumFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 7V5.5l4-2L15 0v7H8V5.5l4-2L5 0v7H1v15h8v-4c0-1.7 1.3-3 3-3s3 1.3 3 3v4h8V7h-5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgStadiumFilled;
