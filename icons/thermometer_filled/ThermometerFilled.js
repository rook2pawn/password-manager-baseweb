import * as React from "react";

function SvgThermometerFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 12.54V5c0-2.21-1.79-4-4-4S8 2.79 8 5v7.54c-1.22 1.1-2 2.69-2 4.46 0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.77-.78-3.36-2-4.46zM11 5c0-.55.45-1 1-1s1 .45 1 1v5h-2V5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgThermometerFilled;
