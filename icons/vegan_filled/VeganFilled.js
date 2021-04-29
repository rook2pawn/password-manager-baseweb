import * as React from "react";

function SvgVeganFilled(props) {
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
        d="M12 5.5A6.76 6.76 0 0117 3c3.5 0 6 2.9 6 6.5a6.282 6.282 0 01-2 4.5l-9 8.5L3 14a5.77 5.77 0 01-2-4.5C1 5.9 3.5 3 7 3a7.12 7.12 0 015 2.5zm0 6.7l3.7-3.5 2 2-5.7 5.5-5.7-5.5 2-2 3.7 3.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgVeganFilled;
