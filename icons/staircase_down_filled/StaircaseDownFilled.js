import * as React from "react";

function SvgStaircaseDownFilled(props) {
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
        d="M6 8h4.5l-3 3H1V4.5l3-3V6l4.8-4.7 1.9 1.9L6 8zm11 3V5h6v18H5v-6h6v-6h6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgStaircaseDownFilled;
