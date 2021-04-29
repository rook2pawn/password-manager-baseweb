import * as React from "react";

function SvgDeliveryBagFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 7V1H5v6H1v10c0 3.3 2.7 6 6 6h10c3.3 0 6-2.7 6-6V7h-4zM8 4h8v3H8V4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDeliveryBagFilled;
