import * as React from "react";

function SvgCheckmarkDoubleFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.4 7.6l7.6 7.5 12.1-12L19.9.9l-9.9 10-5.4-5.5-2.2 2.2zm0 8l7.6 7.5 12.1-12-2.2-2.2-9.9 10-5.4-5.5-2.2 2.2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCheckmarkDoubleFilled;
