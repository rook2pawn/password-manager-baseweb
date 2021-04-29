import * as React from "react";

function SvgPersonCheckFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13 14H7c-3.3 0-6 2.7-6 6v3h12.1c-1-1.2-1.6-2.8-1.6-4.5 0-1.7.6-3.3 1.6-4.5H13z"
        fill="currentColor"
      />
      {","}
      <path d="M10 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11z" fill="currentColor" />
      {","}
      <path
        d="M21.5 15l-3.01 3.01-1.51-1.51L15 18.48l3.49 3.49 4.99-4.99L21.5 15z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPersonCheckFilled;
