import * as React from "react";

function SvgMissingGlyphFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 2v20h20V2H2zm8 10l-5 5V7l5 5zM7 5h10l-5 5-5-5zm5 9l5 5H7l5-5zm2-2l5-5v10l-5-5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMissingGlyphFilled;
