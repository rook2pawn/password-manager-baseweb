import * as React from "react";

function SvgCarSideFilled(props) {
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
        d="M11.5 7l7 1.8c2.7.7 4.5 3.1 4.5 5.8V19h-6v-.5c0-3.6-2.9-6.5-6.5-6.5S4 14.9 4 18.5v.5H1V1h3.5l7 6zM15 18.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCarSideFilled;
