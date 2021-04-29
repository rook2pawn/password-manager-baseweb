import * as React from "react";

function SvgPresentationScreenFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23 1H1v4h1v11h8.5v4H6v3h12v-3h-4.5v-4H22V5h1V1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPresentationScreenFilled;
