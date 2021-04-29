import * as React from "react";

function SvgSteeringWheelFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 3c3.9 0 7.1 2.8 7.9 6.5h-3.1c-.6-2-2.5-3.5-4.7-3.5S8 8.5 7.4 10.5H4.3C4.9 6.8 8.1 4 12 4zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-7.9-.5h3.1c.5 1.5 1.7 2.8 3.2 3.2v3.1c-3.1-.6-5.6-3.1-6.3-6.3zm9.4 6.4v-3.1c1.5-.5 2.8-1.7 3.2-3.2h3.1c-.6 3.1-3.1 5.6-6.3 6.3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSteeringWheelFilled;
