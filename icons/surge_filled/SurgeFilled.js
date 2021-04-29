import * as React from "react";

function SvgSurgeFilled(props) {
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
        d="M11 1.5l-3.5 12h5L10 21.9l-8-4.4v-11l9-5zm.5 9L14 2.1l8 4.4v11l-9 5 3.5-12h-5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSurgeFilled;
