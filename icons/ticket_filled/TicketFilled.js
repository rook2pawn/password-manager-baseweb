import * as React from "react";

function SvgTicketFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 20h22v-5c-1.7 0-3-1.3-3-3s1.4-3 3-3V4H1v5c1.7 0 3 1.3 3 3 0 1.6-1.4 3-3 3v5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTicketFilled;
