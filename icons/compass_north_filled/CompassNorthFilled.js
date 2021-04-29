import * as React from "react";

function SvgCompassNorthFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M18.563 13.5H5.438L12 24l6.562-10.5z" fill="currentColor" />
      {","}
      <path d="M5.438 10.5h13.125L12 0 5.437 10.5z" fill="currentColor" />
    </svg>
  );
}

export default SvgCompassNorthFilled;
