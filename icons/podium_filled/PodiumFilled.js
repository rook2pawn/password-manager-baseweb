import * as React from "react";

function SvgPodiumFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 4V1H3v3l2 2v14H3v3h18v-3h-2V6l2-2zM9 6h6v4H9V6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPodiumFilled;
