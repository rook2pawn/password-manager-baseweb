import * as React from "react";

function SvgBusEnterFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 11v3H5V7h8V2H6C3.79 2 2 3.79 2 6v4H1v5h1v9h4v-2h12v2h4v-9h1v-4h-4zm-4 6h4v2h-4v-2zm-6 0v2H5v-2h4z"
        fill="currentColor"
      />
      {","}
      <path
        d="M19.58 3l2.2-3H18.3L15 4.5 18.3 9h3.48l-2.2-3H24V3h-4.42z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBusEnterFilled;
