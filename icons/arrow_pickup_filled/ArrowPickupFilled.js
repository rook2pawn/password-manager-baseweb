import * as React from "react";

function SvgArrowPickupFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 22a2 2 0 100-4 2 2 0 000 4z" fill="currentColor" />
      {","}
      <path
        d="M12 1.77L5 6.89v3.47l5.5-4.03V16h3V6.33l5.5 4.03V6.89l-7-5.12z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgArrowPickupFilled;
