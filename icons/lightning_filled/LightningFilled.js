import * as React from "react";

function SvgLightningFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M11 24L21 9h-8V0L3 15h8v9z" fill="currentColor" />
    </svg>
  );
}

export default SvgLightningFilled;
