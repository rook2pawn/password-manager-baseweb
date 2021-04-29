import * as React from "react";

function SvgMusicNoteFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 1v13.3c-.5-.2-1-.3-1.5-.3C2 14 0 16 0 18.5S2 23 4.5 23 9 21 9 18.5V8h10v6.3c-.5-.2-1-.3-1.5-.3-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5V1H6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMusicNoteFilled;
