import * as React from "react";

function SvgCoinTipFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 1C5.92 1 1 5.92 1 12s4.92 11 11 11 11-4.92 11-11S18.08 1 12 1zm2 13l-2 5.5-2-5.5-5.5-2 5.5-2 2-5.5 2 5.5 5.5 2-5.5 2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCoinTipFilled;
