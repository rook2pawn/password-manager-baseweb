import * as React from "react";

function SvgTollgateFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24 3.5l-10 5V1H2v22h12v-9l10-5V3.5zM6 5h4v5H6V5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTollgateFilled;
