import * as React from "react";

function SvgThumbUpFilled(props) {
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
        d="M15 3v6h5.5c1.4 0 2.5 1.1 2.5 2.5v3l-2.7 5.8c-.5 1-1.5 1.7-2.7 1.7H7V10l4.5-10h.5c1.7 0 3 1.3 3 3zM2 10h3v12H2V10z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgThumbUpFilled;
