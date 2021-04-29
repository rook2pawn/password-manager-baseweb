import * as React from "react";

function SvgPillFilled(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 3C18.7.7 14.8.7 12.5 3L3 12.5C.7 14.8.7 18.7 3 21s6.2 2.3 8.5 0l9.5-9.5c2.3-2.3 2.3-6.2 0-8.5zm-2.1 6.4l-3.7 3.7-4.3-4.3 3.7-3.7c1.2-1.2 3.1-1.2 4.3 0 1.2 1.2 1.2 3.1 0 4.3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPillFilled;
