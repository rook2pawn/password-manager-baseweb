import * as React from "react";

function SvgCircleMinusFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm6 12.5H6v-3h12v3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCircleMinusFilled;
