import * as React from "react";

function SvgSoyFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 1H1v2c0 11.05 8.95 20 20 20h2v-2C23 9.95 14.05 1 3 1zm3.5 8a2.5 2.5 0 010-5 2.5 2.5 0 010 5zm5.5 5.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5zm5.5 5.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSoyFilled;
