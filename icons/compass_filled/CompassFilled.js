import * as React from "react";

function SvgCompassFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M7.8 5.7l10.5 10.5L22 2 7.8 5.7z" fill="currentColor" />
      {","}
      <path d="M5.7 7.8L2 22l14.2-3.7L5.7 7.8z" fill="currentColor" />
    </svg>
  );
}

export default SvgCompassFilled;
