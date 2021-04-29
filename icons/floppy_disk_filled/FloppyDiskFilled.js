import * as React from "react";

function SvgFloppyDiskFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M16 2H8v6h8V2z" fill="currentColor" />
      {","}
      <path d="M18 3.5V10H6V2H2v20h20V7.5l-4-4z" fill="currentColor" />
    </svg>
  );
}

export default SvgFloppyDiskFilled;
