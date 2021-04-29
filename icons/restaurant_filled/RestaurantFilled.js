import * as React from "react";

function SvgRestaurantFilled(props) {
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
        d="M9 8V1h2v7c0 2.3-1.5 4.2-3.5 4.8V23h-3V12.8C2.5 12.1 1 10.2 1 8V1h2v7h2V1h2v7h2zm4-2c0-2.8 2.2-5 5-5s5 2.2 5 5v2c0 2.2-1.5 4.1-3.5 4.7V23h-3V12.7c-2-.6-3.5-2.5-3.5-4.7V6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgRestaurantFilled;
