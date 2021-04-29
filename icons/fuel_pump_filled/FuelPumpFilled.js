import * as React from "react";

function SvgFuelPumpFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 1.1v3.1c1.2.3 2.1 1.1 2.6 2.2L19 8v5h2v3.5c0 1.4-1.1 2.5-2.5 2.5S16 17.9 16 16.5V1H2v22h14v-1.6c.8.4 1.6.6 2.5.6 3 0 5.5-2.5 5.5-5.5V8c0-3.5-2.6-6.4-6-6.9zM12 5v5H6V5h6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFuelPumpFilled;
