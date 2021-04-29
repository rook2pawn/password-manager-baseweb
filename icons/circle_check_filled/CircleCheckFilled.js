import * as React from "react";

function SvgCircleCheckFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm-1.5 16.1l-5.6-5.6L7 9.4l3.4 3.4 6.4-6.4 2.1 2.1-8.4 8.6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCircleCheckFilled;
