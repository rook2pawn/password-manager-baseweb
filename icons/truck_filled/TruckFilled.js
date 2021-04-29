import * as React from "react";

function SvgTruckFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22 10V1H2v9H1v6h2v7h4v-2h10v2h4v-7h2v-6h-1zm-4 9h-4v-2h4v2zm0-6H6V9h12v4zM6 17h4v2H6v-2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTruckFilled;
