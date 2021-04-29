import * as React from "react";

function SvgFilterFilled(props) {
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
        d="M23 4H1v3h22V4zm-4 7H5v3h14v-3zM9 18h6v3H9v-3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFilterFilled;
