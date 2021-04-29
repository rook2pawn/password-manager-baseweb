import * as React from "react";

function SvgMoneyFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 4v16h22V4H1zm5 5H3V6h3v3zm6 6c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm9 3h-3v-3h3v3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMoneyFilled;
