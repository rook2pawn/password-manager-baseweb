import * as React from "react";

function SvgContactsFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 1v2H1v4h2v10H1v4h2v2h18V1H3zm9 4c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm5 14H7v-2c0-1.7 1.3-3 3-3h4c1.7 0 3 1.3 3 3v2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgContactsFilled;
