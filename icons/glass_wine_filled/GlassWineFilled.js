import * as React from "react";

function SvgGlassWineFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 8V1H4v7c0 3.9 2.8 7.2 6.5 7.9V20H6v3h12v-3h-4.5v-4.1c3.7-.7 6.5-4 6.5-7.9zm-3-4v3H7V4h10z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgGlassWineFilled;
