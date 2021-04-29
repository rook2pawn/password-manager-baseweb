import * as React from "react";

function SvgBikeSeatFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.5 4h-13C3.46 4 1 6.46 1 9.5S3.46 15 6.5 15h5.58l3 6h3.35l-4.32-8.62L16 11h3.5c1.93 0 3.5-1.57 3.5-3.5S21.43 4 19.5 4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBikeSeatFilled;
