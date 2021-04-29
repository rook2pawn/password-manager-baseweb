import * as React from "react";

function SvgTrafficConeFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.2 20L16.4 1h-9L2.6 20H.8v3h22v-3h-1.6zM7.3 14l1-4h7.3l1 4H7.3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTrafficConeFilled;
