import * as React from "react";

function SvgNoParkingFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.1 6H14c2.2 0 4 1.8 4 4v1c0 1.3-.7 2.5-1.7 3.2l4.4 4.4c1.4-1.8 2.2-4.1 2.2-6.6 0-6.1-4.9-11-11-11-2.5 0-4.8.8-6.6 2.2L8.1 6z"
        fill="currentColor"
      />
      {","}
      <path
        d="M12.9 15H11v3H8v-7.9L3.2 5.3C1.8 7.2 1 9.5 1 12c0 6.1 4.9 11 11 11 2.5 0 4.8-.8 6.6-2.2L12.9 15z"
        fill="currentColor"
      />
      {","}
      <path
        d="M11 9v.5l2.5 2.5h.5c.6 0 1-.4 1-1v-1c0-.6-.4-1-1-1h-3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgNoParkingFilled;
