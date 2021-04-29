import * as React from "react";

function SvgDashCamFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 11a2 2 0 100-4 2 2 0 000 4z" fill="currentColor" />
      {","}
      <path
        d="M20 9c0-4.42-3.58-8-8-8S4 4.58 4 9c0 3.91 2.8 7.15 6.5 7.85V20H7v3h10v-3h-3.5v-3.15c3.7-.7 6.5-3.94 6.5-7.85zm-8 4c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDashCamFilled;
