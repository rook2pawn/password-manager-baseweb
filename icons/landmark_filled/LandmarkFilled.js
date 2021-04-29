import * as React from "react";

function SvgLandmarkFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M18 19V6l-6-6-6 6v13H1v3h22v-3h-5z" fill="currentColor" />
    </svg>
  );
}

export default SvgLandmarkFilled;
