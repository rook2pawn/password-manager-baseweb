import * as React from "react";

function SvgMediaPlayerFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 1v22h22V1H1zm8 4l7 4-7 4V5zm11 15H4v-3h16v3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMediaPlayerFilled;
