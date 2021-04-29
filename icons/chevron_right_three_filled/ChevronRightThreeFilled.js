import * as React from "react";

function SvgChevronRightThreeFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23.39 12l-4.62 6h-3.79l4.63-6-4.63-6h3.79l4.62 6z"
        fill="currentColor"
      />
      {","}
      <path
        d="M16.45 12l-4.63 6H8.04l4.62-6-4.62-6h3.78l4.63 6z"
        fill="currentColor"
      />
      {","}
      <path
        d="M9.5 12l-4.62 6H1.09l4.63-6-4.63-6h3.79l4.62 6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgChevronRightThreeFilled;
