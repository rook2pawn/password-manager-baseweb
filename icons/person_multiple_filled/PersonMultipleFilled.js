import * as React from "react";

function SvgPersonMultipleFilled(props) {
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
        d="M12 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm11 0a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM1 17v6h9V12H6c-2.8 0-5 2.2-5 5zm11 6v-6c0-2.8 2.2-5 5-5h6v11H12z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPersonMultipleFilled;
