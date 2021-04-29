import * as React from "react";

function SvgFullscreenFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 3v18h22V3H1zm8 5H6v3H3V5h6v3zm12 11h-6v-3h3v-3h3v6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFullscreenFilled;
