import * as React from "react";

function SvgFuelEvFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 1v4.2l1 1V17c0 1.1-.9 2-2 2s-2-.9-2-2V1H1v22h14v-1.4c.6.3 1.3.4 2 .4 2.8 0 5-2.2 5-5v-5c1.1 0 2-.9 2-2V7l-6-6zM3.5 14L8 4.5V10h4.5L8 19.5V14H3.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFuelEvFilled;
