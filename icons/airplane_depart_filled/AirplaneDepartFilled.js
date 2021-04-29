import * as React from "react";

function SvgAirplaneDepartFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M24 21H0v3h24v-3z" fill="currentColor" />
      {","}
      <path
        d="M21.5 9.4c1.4-.7 1.9-2.4 1.2-3.8s-2.4-1.9-3.8-1.2l-4.5 2.3-8.2-2.4-2 1 4.9 5-3.8 1.9-2.4-.7-2 1 4.7 4.8 15.9-7.9z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgAirplaneDepartFilled;
