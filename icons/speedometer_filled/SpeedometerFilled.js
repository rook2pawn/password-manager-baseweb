import * as React from "react";

function SvgSpeedometerFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zM8.4 15.6l-2 2c-3.1-3.1-3.1-8.1 0-11.2 2.2-2.2 5.4-2.8 8.1-1.9l-2.4 2.4c-1.4 0-2.7.4-3.7 1.5-2 2-2 5.2 0 7.2zM12 14c-1.1 0-2-.9-2-2s.9-2 2-2l4.6-4.6c.8.5 1.4 1.2 2 2L14 12c0 1.1-.9 2-2 2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSpeedometerFilled;
