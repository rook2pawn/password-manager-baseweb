import * as React from "react";

function SvgMeatFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.5 1C5.81 1 2 4.81 2 9.5c0 2.42 1.02 4.6 2.65 6.15h-.01l6.34 6.03h.01c.85.81 2 1.31 3.27 1.31 2.62 0 4.75-2.13 4.75-4.75V9.5C19 4.81 15.19 1 10.5 1zm0 12C8.57 13 7 11.43 7 9.5S8.57 6 10.5 6 14 7.57 14 9.5 12.43 13 10.5 13z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMeatFilled;
