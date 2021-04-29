import * as React from "react";

function SvgRouteFlagFilled(props) {
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
        d="M9 1h14l-3 5 3 5H9V1zM5.5 14h12c2.5 0 4.5 2 4.5 4.5S20 23 17.5 23H5v-3h12.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-12C3 17 1 15 1 12.5S3 8 5.5 8H7v3H5.5c-.8 0-1.5.7-1.5 1.5S4.7 14 5.5 14z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgRouteFlagFilled;
